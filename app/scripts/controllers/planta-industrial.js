'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PlantaIndustrialCtrl
 * @description
 * # PlantaIndustrialCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PlantaIndustrialCtrl', function ($scope, ngProgressFactory) {
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.progressbar.complete();
});