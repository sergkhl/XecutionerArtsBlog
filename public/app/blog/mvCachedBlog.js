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