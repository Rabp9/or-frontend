'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.convocatoriasService
 * @description
 * # convocatoriasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ConvocatoriasService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'convocatorias/:id.json', {}, {
        preview: {
            method: 'POST',
            url: EnvService.getHost() + 'convocatorias/preview/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});