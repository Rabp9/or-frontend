'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PoliticasCtrl
 * @description
 * # PoliticasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PoliticasCtrl', function ($scope, PoliticasService, ngProgressFactory, SlidesService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'politicas/';
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    SlidesService.getHeader(function(data) {
        $scope.imagen = data.file;
    });
    
    PoliticasService.get(function(data) {
        $scope.politicas = data.politicas;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});