'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:AsesoriasCtrl
 * @description
 * # AsesoriasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('AsesoriasCtrl', function ($scope, AsesoriasService, ngProgressFactory, SlidesService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'asesorias/';
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    SlidesService.getHeader(function(data) {
        $scope.imagen = data.file;
    });
    
    AsesoriasService.get(function(data) {
        $scope.asesorias = data.asesorias;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});