'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.PoliticasService
 * @description
 * # PoliticasService
 * Service in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('PoliticasService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'politicas/:id.json', {});
});