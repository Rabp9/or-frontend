'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.obrasService
 * @description
 * # obrasService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ObrasService', function($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'obras/:id.json', {});
});