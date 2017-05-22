'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosCtrl', function ($scope, ProductosService, SlidesService) {
    
    SlidesService.getHeader(function(data) {
        $scope.imagen = data.file;
    });
    
    ProductosService.getTreeList({spacer: '&nbsp;'}, function(data) {
        $scope.productos = data.productos;
    });
});
