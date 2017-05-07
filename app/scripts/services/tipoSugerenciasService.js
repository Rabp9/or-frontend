'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.tipoSugerenciasService
 * @description
 * # tipoSugerenciasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('TipoSugerenciasService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'tipo_sugerencias/:id.json', {}, {
        sendMessage: {
            method: 'POST',
            url: EnvService.getHost() + 'tipo_sugerencias/sendMessage/.json',
        }
    });
});