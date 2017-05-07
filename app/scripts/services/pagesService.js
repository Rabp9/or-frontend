'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.pagesService
 * @description
 * # pagesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('PagesService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'pages/:id.json', {}, {
        getPages: {
            method: 'GET',
            url: EnvService.getHost() + 'pages/getPages/:type.json',
        }
    });
});