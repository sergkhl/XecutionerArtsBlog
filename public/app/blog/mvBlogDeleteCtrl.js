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