'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('PagesCtrl', function ($scope, $stateParams, PagesService) {
    var id = $stateParams.id;
        
    PagesService.get({id: id}, function(data) {
        $scope.page = data.page;
    });
});