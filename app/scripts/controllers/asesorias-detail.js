'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:AsesoriasDetailCtrl
 * @description
 * # AsesoriasDetailCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('AsesoriasDetailCtrl', function ($scope, $stateParams, AsesoriasService, 
    $rootScope, ngProgressFactory, SlidesService) {
    var id = $stateParams.id;
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    SlidesService.getHeader(function(data) {
        $scope.imagen = data.file;
    });
    
    AsesoriasService.get({id: id}, function(data) {
        $scope.asesoria = data.asesoria;
        
        $rootScope.title = $scope.asesoria.title;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});