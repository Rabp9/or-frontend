'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:SugerenciasCtrl
 * @description
 * # SugerenciasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('SugerenciasCtrl', function($scope, TipoSugerenciasService) {
    TipoSugerenciasService.get(function(data) {
        $scope.tipo_sugerencias = data.tipo_sugerencias;
    });
});