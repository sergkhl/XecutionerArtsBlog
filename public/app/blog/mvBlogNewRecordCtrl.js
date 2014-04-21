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