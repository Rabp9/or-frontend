'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ObrasCtrl
 * @description
 * # ObrasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ObrasCtrl', function ($scope, ObrasService, ngProgressFactory, SlidesService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'obras/';
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    SlidesService.getHeader(function(data) {
        $scope.imagen = data.file;
    });
    
    ObrasService.get(function(data) {
        $scope.obras = data.obras;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});