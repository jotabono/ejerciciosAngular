angular.module('jugadorEquipoApp')
.controller('ej8', function($scope, $http) {
    $http.get("api/equipos/{id}/jugadores").then(function (response) {
        $scope.jugadores = response.data;
    });
});
