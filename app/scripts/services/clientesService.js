'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.clientesService
 * @description
 * # clientesService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
.factory('ClientesService', function($resource, EnvService) {
    return $resource(EnvService.getHost() + 'clientes/:id.json', {}, {
        getCiudades: {
            method: 'GET',
            url: EnvService.getHost() + 'clientes/getCiudades/.json'
        },
        getClientesByCiudad: {
            method: 'GET',
            url: EnvService.getHost() + 'clientes/getClientesByCiudad/:ciudad.json'
        },
        getRubros: {
            method: 'GET',
            url: EnvService.getHost() + 'clientes/getRubros/.json'
        },
        getClientesByRubro: {
            method: 'GET',
            url: EnvService.getHost() + 'clientes/getClientesByRubro/:rubro.json'
        },
    });
});