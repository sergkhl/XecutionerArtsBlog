angular.module('app').factory('mvTech', function ($resource) {
    var TechResource = $resource('/api/techs/:_id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    return TechResource;
});