angular.module('jugadorEquipoApp')
.controller('ej8', function($scope, $http, Equipo) {
    $scope.equipos;
    $scope.getJugadores = function(){
        $http.get("api/equipos/"+$scope.id_Equipo+"/jugadores").then(function (response) {
            $scope.jugadores = response.data;
        });
    }
    $scope.getEquipos = function(){
        Equipo.query({},function(result) {
            $scope.equipos = result;
        });
    };
});
