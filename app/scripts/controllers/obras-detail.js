'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ObrasDetailCtrl
 * @description
 * # ObrasDetailCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ObrasDetailCtrl', function($scope, $stateParams, ObrasService) {
    var id = $stateParams.id;
    
    ObrasService.get({id: id}, function(data) {
        var obra_images = data.obra.obra_images;
        angular.forEach(obra_images, function(value, key) {
            value.url = angular.module('tuplastFrontendApp').path_location + 'img' + '/' + 'obras' + '/' + value.url;
        });
        data.obra.obra_images = obra_images;
        $scope.obra = data.obra;
    });
});