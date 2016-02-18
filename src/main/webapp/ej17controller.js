angular.module('jugadorEquipoApp')
.controller('ej17', function($scope, Jugador, Equipo) {
    $scope.todosJugadores;
    $scope.jugadorSeleccionado;
    $scope.equipos = Equipo.query();

    $scope.getTodosJugadores = function(){
        $scope.todosJugadores = Jugador.query();
    };
    $scope.cargarJugador = function(id){
        Jugador.get({id: id},function(result){
            $scope.jugadorSeleccionado = result;
        });
    };
    $scope.update = function(){
        Jugador.update($scope.jugadorSeleccionado, updateOK);
    };
    var updateOK = function(){
        $scope.getTodosJugadores();
    }
})
.factory("Jugador",function($resource, DateUtils){
    return $resource('api/jugadors/:id', {}, {
        'query': { method: 'GET', isArray: true},
        'get': {
            method: 'GET',
            transformResponse: function (data) {
                data = angular.fromJson(data);
                data.fechaNacimiento = DateUtils.convertLocaleDateFromServer(data.fechaNacimiento);
                return data;
            }
        },
        'update': {
            method: 'PUT',
            transformRequest: function (data) {
                return angular.toJson(data);
            }
        }
    });
});
