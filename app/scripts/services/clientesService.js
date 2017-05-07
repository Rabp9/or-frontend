'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.clientesService
 * @description
 * # clientesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ClientesService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'clientes/:id.json', {}, {
        preview: {
            method: 'POST',
            url: EnvService.getHost() + 'clientes/preview/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});