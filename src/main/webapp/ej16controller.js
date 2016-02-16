angular.module('jugadorEquipoApp')
.controller('ej16', function($scope, Equipo) {
    $scope.equipo;
    $scope.save = function () {
        $scope.isSaving = true;
        Equipo.save($scope.equipo, onSaveSuccess, onSaveError);
    };
    var onSaveSuccess = function (result) {
        $scope.isSaving = false;
    };
    var onSaveError = function (result) {
        $scope.isSaving = false;
    };
})
.factory("Equipo",function($resource){
    return $resource('api/equipos/:id', {}, {
        'save': {
            method: 'POST',
            transformRequest: function (data) {
                return angular.toJson(data);
            }
        }
    });
});
