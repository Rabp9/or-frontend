'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.slidesService
 * @description
 * # slidesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('SlidesService', function($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'slides/:id.json', {});
});