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