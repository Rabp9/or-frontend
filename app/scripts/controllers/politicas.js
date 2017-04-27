'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PoliticasCtrl
 * @description
 * # PoliticasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PoliticasCtrl', function($scope, PoliticasService, ngProgressFactory) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'politicas/';
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    PoliticasService.get(function(data) {
        $scope.politicas = data.politicas;
        $scope.progressbar.complete();
    });
});