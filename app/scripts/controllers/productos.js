'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosCtrl', function ($scope, ProductosService) {
    ProductosService.getLineasProductos(function(data) {
        $scope.productos = data.productos;
    });
});