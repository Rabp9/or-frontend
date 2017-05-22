'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.slidesService
 * @description
 * # slidesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('SlidesService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'slides/:id.json', {}, {
        getHeader: {
            method: 'GET',
            url: EnvService.getHost() + 'slides/getHeader.json',
        }
    });
});