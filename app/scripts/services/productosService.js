'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.productosService
 * @description
 * # productosService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ProductosService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'productos/:id.json', {}, {
        getLineasProductos: {
            method: 'GET',
            url: EnvService.getHost() + 'productos/getLineasProductos/.json'
        },
        getProductosMain: {
            method: 'GET',
            url: EnvService.getHost() + 'productos/getProductosMain/.json'
        },
        getPages: {
            method: 'GET',
            url: EnvService.getHost() + 'productos/getPages/.json'
        },
        getTreeList: {
            method: 'GET',
            url: EnvService.getHost() + 'productos/getTreeList/:spacer.json'
        },
        getRootProductos: {
            method: 'GET',
            url: EnvService.getHost() + 'productos/getRootProductos.json'
        },
        getPublic: {
            method: 'GET',
            url: EnvService.getHost() + 'productos/getPublic.json'
        }
    });
});