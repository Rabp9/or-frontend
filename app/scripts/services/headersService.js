'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.headersService
 * @description
 * # headersService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('HeadersService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'headers/:id.json', {}, {
        getAdmin: {
            method: 'GET',
            url: EnvService.getHost() + 'headers/getAdmin.json',
        },
        getByDescripcion: {
            method: 'GET',
            url: EnvService.getHost() + 'headers/getByDescripcion.json',
        },
        preview: {
            method: 'POST',
            url: EnvService.getHost() + 'headers/preview/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        },
    });
});