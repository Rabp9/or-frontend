'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosDetailCtrl
 * @description
 * # ProductosDetailCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosDetailCtrl', function($scope, $stateParams, ProductosService, $rootScope, ngProgressFactory) {
    var id = $stateParams.id;
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    ProductosService.get({id: id}, function(data) {
        var producto_images = data.producto.producto_images;
        angular.forEach(producto_images, function(value, key) {
            value.url = angular.module('tuplastFrontendApp').path_location + 'img' + '/' + 'productos' + '/' + value.url;
        });
        data.producto.producto_images = producto_images;
        $scope.producto = data.producto;
        $rootScope.title = $scope.producto.title;
        $scope.progressbar.complete();
    });
});