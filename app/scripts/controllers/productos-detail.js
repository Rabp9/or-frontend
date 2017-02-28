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
});