'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.clientesService
 * @description
 * # clientesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ClientesService', function($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'clientes/:id.json', {}, {
        preview: {
            method: 'POST',
            url: angular.module('tuplastFrontendApp').path_location + 'clientes/preview/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});