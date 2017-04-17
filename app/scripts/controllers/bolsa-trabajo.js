'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:BolsaTrabajoCtrl
 * @description
 * # BolsaTrabajoCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
  .controller('BolsaTrabajoCtrl', function($scope, ConvocatoriasService) {
    ConvocatoriasService.get(function(data) {
        $scope.convocatorias = data.convocatorias;
    });
});