angular.module('app').controller('mvTechListCtrl', function ($scope, mvCachedTechs) {
    $scope.techs = mvCachedTechs.query();

    $scope.sortOptions = [
        {value: "name", text: "Sort by Name"},
        {value: "released", text: "Sort by Release Date"}
    ];
    $scope.sortOrder = $scope.sortOptions[0].value;
});