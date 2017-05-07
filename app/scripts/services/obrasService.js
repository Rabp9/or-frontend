'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.obrasService
 * @description
 * # obrasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ObrasService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'obras/:id.json', {});
});