'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.asesoriasService
 * @description
 * # asesoriasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('AsesoriasService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'asesorias/:id.json', {});
});