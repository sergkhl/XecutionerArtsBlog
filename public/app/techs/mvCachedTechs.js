angular.module('app').factory('mvCachedTechs', function (mvTech) {
    var TechList;

    return {
        query: function () {
            if (!TechList) {
                TechList = mvTech.query();
            }

            return TechList;
        }
    }
})