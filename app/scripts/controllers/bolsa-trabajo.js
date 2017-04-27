'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:BolsaTrabajoCtrl
 * @description
 * # BolsaTrabajoCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('BolsaTrabajoCtrl', function ($scope, ConvocatoriasService, ngProgressFactory) {
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    ConvocatoriasService.get(function(data) {
        $scope.convocatorias = data.convocatorias;
        $scope.progressbar.complete();
    });
});