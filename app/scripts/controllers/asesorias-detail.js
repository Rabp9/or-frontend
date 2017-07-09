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
    $rootScope, ngProgressFactory, HeadersService) {
    var id = $stateParams.id;
    $scope.loading = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    HeadersService.getByDescripcion({descripcion: 'obras'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    AsesoriasService.get({id: id}, function(data) {
        $scope.asesoria = data.asesoria;
        
        $rootScope.title = $scope.asesoria.title;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});