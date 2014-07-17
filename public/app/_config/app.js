angular.module('app', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAnimate'
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
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.transitionState = "";
        $rootScope.transitionState = "active";
    });
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