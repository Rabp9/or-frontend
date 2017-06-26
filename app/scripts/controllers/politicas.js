'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PoliticasCtrl
 * @description
 * # PoliticasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PoliticasCtrl', function ($scope, PoliticasService, ngProgressFactory, HeadersService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'politicas/';
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    HeadersService.getByDescripcion({descripcion: 'politicas'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    PoliticasService.get(function(data) {
        $scope.politicas = data.politicas;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});