'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosDetailCtrl
 * @description
 * # ProductosDetailCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosDetailCtrl', function ($scope, $stateParams, ProductosService) {
    var id = $stateParams.id;
        
    ProductosService.get({id: id}, function(data) {
        $scope.producto = data.producto;
    });
    
    $scope.images = [{
        title : 'This is amazing photo of nature',
        alt : 'amazing nature photo',
        url : '//unsplash.it/200/400',
        extUrl : '//unsplash.it/270/500'
    }, {
        url : '//unsplash.it/180/400'
    }, {
        url : '//unsplash.it/190/300'
    }, {
        url : '//unsplash.it/120/100'
    }, {
        url : '//unsplash.it/170/500'
    }, {
        thumbUrl : '//unsplash.it/200/50',
        url : '//unsplash.it/350/270'
    }];
});