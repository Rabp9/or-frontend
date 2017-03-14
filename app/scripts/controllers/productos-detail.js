'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ProductosDetailCtrl
 * @description
 * # ProductosDetailCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ProductosDetailCtrl', function ($scope, $state, $stateParams) {
    var id = $stateParams.id;
    var paginas = [];
    
    paginas.push({
        titulo: 'Titulo 1'
    }, {
        titulo: 'Titulo 2'
    }, {
        titulo: 'Titulo 3'
    }, {
        titulo: 'Titulo 4'
    }, {
        titulo: 'Titulo 5'
    });
    
    $scope.pagina = paginas[id - 1];
    
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