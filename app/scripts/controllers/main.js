'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('MainCtrl', function ($scope, $window) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 1400 + slides.length + 1;
        var height_slide = $window.innerHeight - 70;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/' + height_slide,
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
    
    $scope.animateElementIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInUp'); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
     /*   $el.addClass('hidden');
        $el.removeClass('animated fadeInUp'); // this example leverages animate.css classes*/
    };
    
    $scope.hoverLineaProductos = function($event) {
        $($event.currentTarget).find('.linea-productos-imagen img').addClass('animated fadeIn delay-1');
        $($event.currentTarget).find('.linea-productos-imagen img').removeClass('not-visible');
    }
    
    $scope.hoverCarteraClientes = function($event, hover) {
        if (hover) {
            $($event.currentTarget).find('.cartera-clientes-description').css('display', 'none');
            $($event.currentTarget).find('.cartera-clientes-logos').css('display', 'block');
        } else {
            $($event.currentTarget).find('.cartera-clientes-description').css('display', 'block');
            $($event.currentTarget).find('.cartera-clientes-logos').css('display', 'none');
        }
    }
    
    $(".dropdown-toggle").dropdown();
});
