/*! XecutionerArts - v0.0.0 - 2014-04-20
 * https://github.com/
 * Copyright (c) 2014 Sergio Khlopenkov;
 * Licensed MIT
 */
angular.module('app', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
    //,'ngAnimate'
]);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function (mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function (mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute()
        }}
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/about', { templateUrl: '/partials/main/about', controller: 'mvMainAboutCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/courses', { templateUrl: '/partials/courses/course-list',
            controller: 'mvCourseListCtrl'
        })
        .when('/courses/:id', { templateUrl: '/partials/courses/course-details',
            controller: 'mvCourseDetailCtrl'
        })
        .when('/blog', { templateUrl: '/partials/blog/blog',
            controller: 'mvBlogListCtrl'
        })
        .when('/blog/post', { templateUrl: '/partials/blog/blogNewRecord',
            controller: 'mvBlogNewRecordCtrl'
        })
        .when('/blog/:id/edit', { templateUrl: '/partials/blog/blogEditRecord',
            controller: 'mvBlogEditRecordCtrl'//, resolve: routeRoleChecks.user
        })
        .when('/blog/:id/delete', { templateUrl: '/partials/blog/blogDeleteRecord',
            controller: 'mvBlogDeleteCtrl'//, resolve: routeRoleChecks.user
        })
        .when('/blog/:id', { templateUrl: '/partials/blog/blog-details',
            controller: 'mvBlogDetailCtrl'
        })
});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});

angular.module('app').directive('goClick', function ($location) {
    return function (scope, element, attrs) {
        var path;

        attrs.$observe('goClick', function (val) {
            path = val;
        });

        element.bind('click', function () {
            scope.$apply(function () {
                $location.path(path);
            });
        });
    };
});

angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q, mvUser) {
    return {
        authenticateUser: function (username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username: username, password: password}).then(function (response) {
                if (response.data.success) {
                    var user = new mvUser();
                    angular.extend(user, response.data.user);
                    mvIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },

        createUser: function (newUserData) {
            var newUser = new mvUser(newUserData);
            var dfd = $q.defer();

            newUser.$save().then(function () {
                mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentUser: function (newUserData) {
            var dfd = $q.defer();

            var clone = angular.copy(mvIdentity.currentUser);
            console.log('object is ', newUserData);
            angular.extend(clone, newUserData);

            clone.$update().then(function () {
                mvIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        logoutUser: function () {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function () {
                mvIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function (role) {
            if (mvIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }

        },
        authorizeAuthenticatedUserForRoute: function () {
            if (mvIdentity.isAuthenticated()) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        }
    }
});
angular.module('app').factory('mvIdentity', function ($window, mvUser) {
    var currentUser;
    if (!!$window.bootstrappedUserObject) {
        currentUser = new mvUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorized: function (role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
})
angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function (success) {
            if (success) {
                mvNotifier.notify('You have successfully signed in!');
            } else {
                mvNotifier.notify('Username/Password combination incorrect');
            }
        });
    }

    $scope.signout = function () {
        mvAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify('You have successfully signed out!');
            $location.path('/');
        })
    }
});
angular.module('app').controller('mvProfileCtrl', function ($scope, mvAuth, mvIdentity, mvNotifier) {
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    $scope.update = function () {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        }
        if ($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        mvAuth.updateCurrentUser(newUserData).then(function () {
            mvNotifier.notify('Your user account has been updated');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
})
angular.module('app').controller('mvSignupCtrl', function ($scope, mvUser, mvNotifier, $location, mvAuth) {

    $scope.signup = function () {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function () {
            mvNotifier.notify('User account created!');
            $location.path('/');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
})
angular.module('app').factory('mvUser', function ($resource) {
    var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    UserResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return UserResource;
});
angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
    $scope.users = mvUser.query();
});
angular.module('app').controller('mvBlogDeleteCtrl', function ($scope, mvBlogRecord, mvCachedBlog, mvNotifier, $location, mvBlogq, $routeParams) {

    $scope.deletePost = function () {


        mvBlogq.deleteBlogRecord($routeParams.id).then(function () {
            mvNotifier.notify('Blog post deleted!');
            mvCachedBlog.refresh();
            $location.path('/blog');
        }, function (reason) {
            mvNotifier.error(reason);
        })
}
})
angular.module('app').controller('mvBlogDetailCtrl', function ($scope, mvCachedBlog, $routeParams) {
    mvCachedBlog.query().$promise.then(function (collection) {
        collection.forEach(function (blogrecord) {
            if (blogrecord._id === $routeParams.id) {
                $scope.blogrecord = blogrecord;
            }
        })
    })
});
angular.module('app').controller('mvBlogEditRecordCtrl', function ($scope, mvCachedBlog, $routeParams, mvBlogq, mvBlogRecordCur, mvBlogRecord, mvNotifier) {
    /*$scope.title = mvBlogRecordCur.currentBlogRecord.title;
    $scope.text = mvBlogRecordCur.currentBlogRecord.text;
    $scope.author = mvBlogRecordCur.currentBlogRecord.author;*/

    mvCachedBlog.query().$promise.then(function (collection) {
        collection.forEach(function (blogrecord) {
            if (blogrecord._id === $routeParams.id) {
                //$scope.blogrecord = blogrecord;
                $scope.blogrecord = mvBlogRecord.get({id:$routeParams.id});
                mvBlogRecordCur.currentBlogRecord = $scope.blogrecord;
            }
        })
    })

    $scope.update = function () {
        var newBlogRecordData = {
            title: $scope.blogrecord.title,
            text: $scope.blogrecord.text,
            author: $scope.blogrecord.author
        }

        mvBlogq.updateCurrentBlogRecord(newBlogRecordData).then(function () {
            mvNotifier.notify('Post has been updated');
            mvCachedBlog.refresh();
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
})
angular.module('app').controller('mvBlogListCtrl', function ($scope, mvCachedBlog) {
    $scope.blog = mvCachedBlog.query();

    $scope.sortOptions = [
        {value: "title", text: "Sort by Title"},
        {value: "-published", text: "Sort by Publish Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[1].value;

    $scope.sOrder = function(newSortingOrder)
    {
        $scope.sortOrder = newSortingOrder;
        $scope.reverse =! $scope.reverse;
    };
});
angular.module('app').controller('mvBlogNewRecordCtrl', function ($scope, mvBlogRecord, mvCachedBlog, mvNotifier, $location, mvBlogq) {

    $scope.createPost = function () {
        var newRecord = {
            title: $scope.title,
            text: $scope.text,
            author: $scope.author
        };

        mvBlogq.createBlogRecord(newRecord).then(function () {
            mvNotifier.notify('Blog post created!');
            mvCachedBlog.refresh();
            $location.path('/blog');
        }, function (reason) {
            mvNotifier.error(reason);
        })
}
})
angular.module('app').factory('mvBlogRecord', function ($resource) {
    var BlogRecordResource = $resource('/api/blog/:id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    BlogRecordResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return BlogRecordResource;
});


angular.module('app').factory('mvBlogRecordCur', function (mvBlogRecord) {
    var currentBlogRecord;
            currentBlogRecord = new mvBlogRecord();


    return {
        currentBlogRecord: currentBlogRecord

    }
});

angular.module('app').factory('mvBlogq', function ($http, mvBlogRecordCur, $q, mvBlogRecord) {
    return {

        createBlogRecord: function (newRecord) {
            var newBlogRecord = new mvBlogRecord(newRecord);
            var dfd = $q.defer();

            newBlogRecord.$save().then(function () {
                //mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentBlogRecord: function (newBlogRecordData) {
            var dfd = $q.defer();
            var clone = angular.copy(mvBlogRecordCur.currentBlogRecord);

            angular.extend(clone, newBlogRecordData);
            console.log('object is ', clone);
            clone.$update().then(function () {
                //mvIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        deleteBlogRecord: function (id) {
            //var newBlogRecord = new mvBlogRecord(newRecord);
            var dfd = $q.defer();

            mvBlogRecord.remove({id: id}
                ,function (err) {
                    if (!err) {dfd.resolve();}
                    else {dfd.reject(err.data.reason);}
                }
            );

            return dfd.promise;
        }
    }
});
angular.module('app').factory('mvCachedBlog', function (mvBlogRecord) {
    var blogList;

    return {
        query: function () {
            if (!blogList) {
                blogList = mvBlogRecord.query();
            }

            return blogList;
        },
        refresh: function() {
            blogList = mvBlogRecord.query();
        }
    }
})
angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function (mvToastr) {
    return {
        notify: function (msg) {
            mvToastr.success(msg);
            console.log(msg);
        },
        error: function (msg) {
            mvToastr.error(msg);
            console.log(msg);
        }
    }
})
angular.module('app').factory('mvCachedCourses', function (mvCourse) {
    var courseList;

    return {
        query: function () {
            if (!courseList) {
                courseList = mvCourse.query();
            }

            return courseList;
        }
    }
})
angular.module('app').factory('mvCourse', function ($resource) {
    var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    return CourseResource;
});
angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCachedCourses, $routeParams) {
    mvCachedCourses.query().$promise.then(function (collection) {
        collection.forEach(function (course) {
            if (course._id === $routeParams.id) {
                $scope.course = course;
            }
        })
    })
});
angular.module('app').controller('mvCourseListCtrl', function ($scope, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();

    $scope.sortOptions = [
        {value: "title", text: "Sort by Title"},
        {value: "published", text: "Sort by Publish Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[0].value;
});
angular.module('app').controller('mvMainAboutCtrl', function ($scope) {
    //$scope.courses = mvCachedCourses.query();
});
angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedBlog, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();
    $scope.blogrecords = mvCachedBlog.query();
});
angular.module('templates.app', []);


angular.module('templates.common', []);

