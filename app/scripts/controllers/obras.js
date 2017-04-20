'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ObrasCtrl
 * @description
 * # ObrasCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ObrasCtrl', function($scope, ObrasService) {
    $scope.path_img = angular.module('tuplastFrontendApp').path_location + 'img/' + 'obras/';
    
    ObrasService.get(function(data) {
        $scope.obras = data.obras;
    });
});