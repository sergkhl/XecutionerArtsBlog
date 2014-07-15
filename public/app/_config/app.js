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
        .when('/signin', { templateUrl: '/partials/account/navbar-login',
            //controller: 'mvNavBarLoginCtrl'
        })
        .when('/technologies', { templateUrl: '/partials/techs/tech-list',
            controller: 'mvTechListCtrl'
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

angular.module('app').directive('syntaxElement', function () {
    return {
        restrict:'E',
        replace:true,
        template:
            '<div>' +
                '  <button type="button" class="btn btn-primary save" ng-disabled="!canSave()" ng-click="save()">Save</button>' +
            '</div>'
    };
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


angular.module('app').directive('showOnHover',

    function () {
        return {
            link: function (scope, element, attrs) {

                var leftfademenu = $('body').find('#left-fade-menu');
                var leftfadetoggle = $('body').find('#left-fade-toggle');

                leftfadetoggle.bind('mouseenter', function () {
                    leftfademenu.show();
                    leftfademenu.hide().fadeIn('slow');

                    console.log('showwwwweeee');
                });

                leftfademenu.bind('mouseleave', function () {
                    /*leftfademenu.animate({opacity: 0}, 700).delay(700).queue(function(next) {
                        leftfademenu.hide();
                        next();
                    });*/

                    leftfademenu.fadeOut('fast').delay(500).queue(function(next) {
                        leftfademenu.hide();
                        next();
                    });
                    /*leftfademenu.removeClass("fade").delay(500).queue(function(next) {
                        leftfademenu.hide();
                        next();
                    });*/
                    //leftfademenu.hide();
                    console.log('hideeee');
                });

//                element.bind('mouseenter', function () {
//                    $('body').find('#left-fade-menu').show();
//                });
//
//                element.bind('mouseleave', function () {
//                    element.find('#left-fade-menu').hide();
//                });

                element.closest('lol').bind('mouseenter', function () {
                    element.show();
                });
                element.closest('lol').bind('mouseleave', function () {
                    element.hide();

                    var contextmenu = element.find('#contextmenu');
                    contextmenu.click();

                    element.parent().removeClass('open');

                });

            }
        };
    })
