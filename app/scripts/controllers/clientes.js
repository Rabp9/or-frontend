'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ClientesCtrl
 * @description
 * # ClientesCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ClientesCtrl', function($scope, ClientesService, ngProgressFactory) {
    $scope.path_logos = angular.module('tuplastFrontendApp').path_location + 'img/' + 'clientes/';
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    ClientesService.get(function(data) {
        $scope.clientes = data.clientes;
        $scope.progressbar.complete();
    });
});