'use strict';

angular.module('jugadorEquipoApp')
    .controller('JugadorController', function ($scope, Jugador) {
        $scope.jugadors = [];
        $scope.loadAll = function() {
            Jugador.query(function(result) {
               $scope.jugadors = result;
            });
        };
        $scope.loadAll();

        $scope.delete = function (id) {
            Jugador.get({id: id}, function(result) {
                $scope.jugador = result;
                $('#deleteJugadorConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Jugador.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteJugadorConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.jugador = {
                nombreJugador: null,
                numRebotes: null,
                numAsistencias: null,
                numCanastas: null,
                fechaNacimiento: null,
                posicion: null,
                id: null
            };
        };
    });
