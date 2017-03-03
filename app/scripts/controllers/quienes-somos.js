'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:QuienesSomosCtrl
 * @description
 * # QuienesSomosCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('QuienesSomosCtrl', function ($scope) {
    var controladorWhenVisible = 0;
    
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