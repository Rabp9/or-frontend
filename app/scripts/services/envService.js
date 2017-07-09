'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.envService
 * @description
 * # envService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('EnvService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/or-backend/';
                case 'tuplast.robertobocanegra.com':
                    return 'http://tuplast.robertobocanegra.com/api/';
                case 'tuplast.pe':
                    return 'http://tuplast.pe/api/';
            }
        }
    };
});