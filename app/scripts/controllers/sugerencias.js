'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:SugerenciasCtrl
 * @description
 * # SugerenciasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('SugerenciasCtrl', function ($scope, TipoSugerenciasService, ngProgressFactory,
    HeadersService) {
    
    $scope.sugerencia = {};
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.loading = 'Cargando...';
    
    HeadersService.getByDescripcion({descripcion: 'sugerencias'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    TipoSugerenciasService.get(function(data) {
        $scope.tipo_sugerencias = data.tipo_sugerencias;
        $scope.progressbar.complete();
        $scope.loading = 'Selecciona un Tipo de Sugerencia';
    });
    
    $scope.sendMessage = function (sugerencia) {
        TipoSugerenciasService.sendMessage(sugerencia, function (data) {
            $scope.message = data.message;
        });
    };
});