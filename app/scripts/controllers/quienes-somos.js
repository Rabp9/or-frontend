'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:QuienesSomosCtrl
 * @description
 * # QuienesSomosCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('QuienesSomosCtrl', function ($scope, InfosService) {
    var controladorWhenVisible = 0;
    var dataSearch = ['nuestraHistoria', 'vision', 'mision', 'valor1', 'valor2',
        'valor3', 'valor4', 'valor5', 'valor6', 'valor7'
    ];
    $scope.quienesSomos = {};
    
    InfosService.getDataMany(dataSearch, function(data) {
        angular.forEach(dataSearch, function(value, key) {
            $scope.quienesSomos[value] = data.info[value];
        });
    });
    
    
    $scope.animateElementIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
        if (controladorWhenVisible !== 10) {
            $el.addClass('not-visible');
            $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes
            controladorWhenVisible++;
        }
    };
});