'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosCtrl', function ($scope, ProductosService, HeadersService) {
    
    HeadersService.getByDescripcion({descripcion: 'productos'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    ProductosService.getTreeList({spacer: ' '}, function(data) {
        $scope.productos = data.productos;
    });
});
