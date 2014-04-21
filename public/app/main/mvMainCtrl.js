angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedBlog, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();
    $scope.blogrecords = mvCachedBlog.query();
});