angular.module('app').controller('mvBlogDetailCtrl', function ($scope, mvCachedBlog, $routeParams) {
    mvCachedBlog.query().$promise.then(function (collection) {
        collection.forEach(function (blogrecord) {
            if (blogrecord._id === $routeParams.id) {
                $scope.blogrecord = blogrecord;
            }
        })
    })
});