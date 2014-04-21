angular.module('app').factory('mvBlogRecord', function ($resource) {
    var BlogRecordResource = $resource('/api/blog/:id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    BlogRecordResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    }

    return BlogRecordResource;
});


angular.module('app').factory('mvBlogRecordCur', function (mvBlogRecord) {
    var currentBlogRecord;
            currentBlogRecord = new mvBlogRecord();


    return {
        currentBlogRecord: currentBlogRecord

    }
});

angular.module('app').factory('mvBlogq', function ($http, mvBlogRecordCur, $q, mvBlogRecord) {
    return {

        createBlogRecord: function (newRecord) {
            var newBlogRecord = new mvBlogRecord(newRecord);
            var dfd = $q.defer();

            newBlogRecord.$save().then(function () {
                //mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        updateCurrentBlogRecord: function (newBlogRecordData) {
            var dfd = $q.defer();
            var clone = angular.copy(mvBlogRecordCur.currentBlogRecord);

            angular.extend(clone, newBlogRecordData);
            console.log('object is ', clone);
            clone.$update().then(function () {
                //mvIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        deleteBlogRecord: function (id) {
            //var newBlogRecord = new mvBlogRecord(newRecord);
            var dfd = $q.defer();

            mvBlogRecord.remove({id: id}
                ,function (err) {
                    if (!err) {dfd.resolve();}
                    else {dfd.reject(err.data.reason);}
                }
            );

            return dfd.promise;
        }
    }
});