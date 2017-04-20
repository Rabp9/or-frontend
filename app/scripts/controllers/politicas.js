'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PoliticasCtrl
 * @description
 * # PoliticasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PoliticasCtrl', function($scope, PoliticasService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'politicas/';
    
    PoliticasService.get(function(data) {
        $scope.politicas = data.politicas;
    });
});