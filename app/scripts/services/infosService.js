'use strict';

/**
 * @ngdoc service
 * @name tuplastAdminApp.infosService
 * @description
 * # infosService
 * Factory in the tuplastAdminApp.
 */
angular.module('tuplastFrontendApp')
.factory('InfosService', function($resource) {
    return $resource(angular.module("tuplastFrontendApp").path_location + 'infos/:id.json', {}, {
        getDataMany: {
            method: 'POST',
            url: angular.module("tuplastFrontendApp").path_location + 'infos/getDataMany.json',
        }
    });
});
