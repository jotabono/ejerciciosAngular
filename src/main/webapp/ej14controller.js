angular.module('jugadorEquipoApp')
.controller('ej14', function($scope, $http) {
    $http.get("api/jugadors").then(function (response) {
        $scope.jugadores = response.data;
    });
    $scope.orderByMe = function(x) {
        $scope.miOrden = x;
    }
});
