 'use strict';

angular.module('jugadorEquipoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jugadorEquipoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jugadorEquipoApp-params')});
                }
                return response;
            }
        };
    });
