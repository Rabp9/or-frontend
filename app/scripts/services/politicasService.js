'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.PoliticasService
 * @description
 * # PoliticasService
 * Service in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('PoliticasService', function ($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'politicas/:id.json', {});
});