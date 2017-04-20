'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.tipoSugerenciasService
 * @description
 * # tipoSugerenciasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('TipoSugerenciasService', function($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'tipo_sugerencias/:id.json', {}, {
        sendMessage: {
            method: 'POST',
            url: angular.module('tuplastFrontendApp').path_location + 'tipo_sugerencias/sendMessage/.json',
        }
    });
});