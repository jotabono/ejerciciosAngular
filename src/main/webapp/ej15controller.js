var app = angular.module('jugadorEquipoApp');
app.controller('creacionCtrl', function($scope, Jugador, Equipo) {
    $scope.equipos;
    $scope.getEquipos = function(){
        Equipo.query({},function(result) {
            $scope.equipos = result;
        });
    };
    $scope.jugador;
    $scope.save = function () {
        $scope.isSaving = true;
        Jugador.save($scope.jugador, onSaveSuccess, onSaveError);
    };
    var onSaveSuccess = function (result) {
        $scope.isSaving = false;
    };
    var onSaveError = function (result) {
        $scope.isSaving = false;
    };
});
app.factory("Jugador",function($resource){
    return $resource('api/jugadors/:id', {}, {
        'save': {
            method: 'POST',
            transformRequest: function (data) {
                return angular.toJson(data);
            }
        }
    });
});
