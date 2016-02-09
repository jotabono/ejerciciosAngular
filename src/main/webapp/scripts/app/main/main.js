'use strict';

angular.module('jugadorEquipoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    }
                },
                resolve: {

                }
            })
            .state('Ej1', {
                parent: 'site',
                url: '/Ej1',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej1.html'
                    }
                },
                resolve: {

                }
            })
            .state('Ej2', {
                parent: 'site',
                url: '/Ej2',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej2.html',
                        controller: 'ej2'
                    }
                },
                resolve: {

                }
            })
            .state('Ej3', {
                parent: 'site',
                url: '/Ej3',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej3.html'
                    }
                },
                resolve: {

                }
            })
            .state('Ej4', {
                parent: 'site',
                url: '/Ej4',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej4.html'
                    }
                },
                resolve: {

                }
            })
            .state('Ej5', {
                parent: 'site',
                url: '/Ej5',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej5.html',
                        controller: 'namesCtrl'
                    }
                },
                resolve: {

                }
            })
            .state('Ej6', {
                parent: 'site',
                url: '/Ej6',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej6.html',
                        controller: 'ej6'
                    }
                },
                resolve: {

                }
            })
            .state('Ej7', {
                parent: 'site',
                url: '/Ej7',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej7.html',
                        controller: 'ej7'
                    }
                },
                resolve: {

                }
            })
            .state('Ej8', {
                parent: 'site',
                url: '/Ej8',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej8.html',
                        controller: 'ej8'
                    }
                },
                resolve: {

                }
            })
            .state('Ej9', {
                parent: 'site',
                url: '/Ej9',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej9.html',
                        controller: 'ej9'
                    }
                },
                resolve: {

                }
            })
            .state('Ej10', {
                parent: 'site',
                url: '/Ej10',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej10.html',
                        controller: 'ej10'
                    }
                },
                resolve: {

                }
            })
            .state('Ej11', {
                parent: 'site',
                url: '/Ej11',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej11.html',
                        controller: 'ej11'
                    }
                },
                resolve: {

                }
            })
            .state('Ej12', {
                parent: 'site',
                url: '/Ej12',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej12.html',
                        controller: 'ej12'
                    }
                },
                resolve: {

                }
            })
            .state('Ej13', {
                parent: 'site',
                url: '/Ej13',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej13.html',
                        controller: 'ej13'
                    }
                },
                resolve: {

                }
            })
            .state('Ej14', {
                parent: 'site',
                url: '/Ej14',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'Ej14.html',
                        controller: 'ej14'
                    }
                },
                resolve: {

                }
            })
        .state('Ej15', {
            parent: 'site',
            url: '/Ej15',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'Ej15.html',
                    controller: 'ej15'
                }
            },
            resolve: {

            }
        });
    });
