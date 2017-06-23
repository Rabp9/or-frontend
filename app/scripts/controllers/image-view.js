'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ImageViewCtrl
 * @description
 * # ImageViewCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ImageViewCtrl', function ($scope, image, $uibModalInstance) {
    $scope.image = image;
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
