'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.convocatoriasService
 * @description
 * # convocatoriasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ConvocatoriasService', function($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'convocatorias/:id.json', {}, {
        preview: {
            method: 'POST',
            url: angular.module('tuplastFrontendApp').path_location + 'convocatorias/preview/.json',
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }
    });
});