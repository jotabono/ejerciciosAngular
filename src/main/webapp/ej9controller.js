angular.module('jugadorEquipoApp')
.controller('ej9', function($scope, $http) {
    $http.get("api/jugadors").then(function (response) {
        $scope.jugadores = response.data;
    });
});
