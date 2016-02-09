'use strict';

angular.module('jugadorEquipoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('jugador', {
                parent: 'entity',
                url: '/jugadors',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Jugadors'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/jugador/jugadors.html',
                        controller: 'JugadorController'
                    }
                },
                resolve: {
                }
            })
            .state('jugador.detail', {
                parent: 'entity',
                url: '/jugador/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Jugador'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/jugador/jugador-detail.html',
                        controller: 'JugadorDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Jugador', function($stateParams, Jugador) {
                        return Jugador.get({id : $stateParams.id});
                    }]
                }
            })
            .state('jugador.new', {
                parent: 'jugador',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/jugador/jugador-dialog.html',
                        controller: 'JugadorDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    nombreJugador: null,
                                    numRebotes: null,
                                    numAsistencias: null,
                                    numCanastas: null,
                                    fechaNacimiento: null,
                                    posicion: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('jugador', null, { reload: true });
                    }, function() {
                        $state.go('jugador');
                    })
                }]
            })
            .state('jugador.edit', {
                parent: 'jugador',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/jugador/jugador-dialog.html',
                        controller: 'JugadorDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Jugador', function(Jugador) {
                                return Jugador.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('jugador', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
