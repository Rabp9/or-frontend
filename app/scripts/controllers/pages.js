'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PagesCtrl', function ($scope, $rootScope, $stateParams, PagesService, ngProgressFactory) {
    var id = $stateParams.id;
    $scope.loading = true;
        
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    PagesService.get({id: id}, function(data) {
        $scope.page = data.page;
        $rootScope.title = $scope.page.title;
        $scope.progressbar.complete();
        $scope.loading = false;
    });
});