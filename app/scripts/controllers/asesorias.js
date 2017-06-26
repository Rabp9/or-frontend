'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:AsesoriasCtrl
 * @description
 * # AsesoriasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('AsesoriasCtrl', function ($scope, AsesoriasService, ngProgressFactory, HeadersService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'asesorias/';
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    HeadersService.getByDescripcion({descripcion: 'asesorias'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    AsesoriasService.get(function(data) {
        $scope.asesorias = data.asesorias;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});