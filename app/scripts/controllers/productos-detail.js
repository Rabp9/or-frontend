'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosDetailCtrl
 * @description
 * # ProductosDetailCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosDetailCtrl', function ($scope, $stateParams, ProductosService, 
    $rootScope, ngProgressFactory, $uibModal) {
    
    var id = $stateParams.id;
    $scope.path = angular.module('tuplastFrontendApp').path_location + 'img' + '/' + 'productos' + '/';
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.loading = true;
    if ($('#bs-example-navbar-collapse-1').hasClass('in')) {
        $('.navbar-toggle').click();
    }
    
    ProductosService.getPublic({id: id}, function(data) {
        var producto_images = data.producto.producto_images;
        var count_index = 0;
        angular.forEach(producto_images, function(value, key) {
            value.index = count_index;
            count_index++;
        });
        data.producto.producto_images = producto_images;
        $scope.producto = data.producto;
        $scope.hijos = data.hijos;
        $rootScope.title = $scope.producto.title;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
    
    $scope.openImage = function(image) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/image-view.html',
            controller: 'ImageViewCtrl',
            size: 'lg',
            resolve: {
                image: function() {
                    return image;
                }
            }
        });
    };
});