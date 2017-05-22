'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:BolsaTrabajoCtrl
 * @description
 * # BolsaTrabajoCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('BolsaTrabajoCtrl', function ($scope, ConvocatoriasService, ngProgressFactory,
    SlidesService) {
        
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.loading = true;
    
    SlidesService.getHeader(function(data) {
        $scope.imagen = data.file;
    });
    
    ConvocatoriasService.get(function(data) {
        $scope.convocatorias = data.convocatorias;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});