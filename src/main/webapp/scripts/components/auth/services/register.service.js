'use strict';

angular.module('jugadorEquipoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


