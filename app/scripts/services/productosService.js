'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.productosService
 * @description
 * # productosService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ProductosService', function ($resource) {
    return $resource(angular.module('tuplastFrontendApp').path_location + 'productos/:id.json', {}, {
        getLineasProductos: {
            method: 'GET',
            url: angular.module('tuplastFrontendApp').path_location + 'productos/getLineasProductos/.json'
        }
    });
});