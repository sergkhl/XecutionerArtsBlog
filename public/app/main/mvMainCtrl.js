angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedBlog, mvCachedTechs) {
    $scope.techs = mvCachedTechs.query();
    $scope.blogrecords = mvCachedBlog.query();
});