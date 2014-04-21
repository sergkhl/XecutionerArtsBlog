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