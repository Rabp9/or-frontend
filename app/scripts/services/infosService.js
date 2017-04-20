'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.infosService
 * @description
 * # infosService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('InfosService', function($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'infos/:id.json', {}, {
        saveMany: {
            method: 'POST',
            url: angular.module('tuplastFrontendApp').path_location + 'infos/saveMany.json',
        },
        getDataMany: {
            method: 'POST',
            url: angular.module('tuplastFrontendApp').path_location + 'infos/getDataMany.json',
        },
        getDataByData: {
            method: 'POST',
            url: angular.module('tuplastFrontendApp').path_location + 'infos/getDataByData.json',
        }
    });
});