angular.module('jugadorEquipoApp')
.controller('ej8', function($scope, $http) {
    $http.get("api/equipos/"+$scope.id_Equipo+"/jugadores").then(function (response) {
        $scope.jugadores = response.data;
    });
});
