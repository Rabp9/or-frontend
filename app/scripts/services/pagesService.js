'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.pagesService
 * @description
 * # pagesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('PagesService', function ($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'pages/:id.json', {}, {
        getPages: {
            method: 'GET',
            url: angular.module('tuplastFrontendApp').path_location + 'pages/getPages/:type.json',
        }
    });
});