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
    HeadersService) {
        
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.loading = true;
    
    HeadersService.getByDescripcion({descripcion: 'quienes_somos'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    ConvocatoriasService.get(function(data) {
        $scope.convocatorias = data.convocatorias;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});