'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('MainCtrl', function ($scope, $window, SlidesService, ProductosService, ObrasService, InfosService, ClientesService, ngProgressFactory) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.path_logos = angular.module('tuplastFrontendApp').path_location + 'img/' + 'clientes/';
    var currIndex = 0;
    
    var controladorWhenVisible = 0;
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
  
    SlidesService.get(function(data) {
        $scope.slides = data.slides;
        $scope.height_slide = $window.innerHeight - (1 + 50 + 80 + (25 * 2)); // 50: $navbar-height, 80: $navbar-header-top-height, 25: $navbar-header-top-margin
      
        angular.forEach($scope.slides, function(value, key) {
            $scope.slides[key].index = currIndex;
            currIndex++;
        });
    });
    
    ProductosService.getLineasProductos(function(data) {
        var productos_aux = data.productos;
        $scope.productos = [];
        for (var i = 0; i < 3; i++) {
            var index = Math.floor(Math.random() * productos_aux.length) + 0;
            $scope.productos.push(productos_aux[index]);
            productos_aux.splice(index, 1);
        }
    });
    
    ObrasService.get(function(data) {
        var obras_aux = data.obras;
        var index = Math.floor(Math.random() * obras_aux.length) + 0;
        $scope.obra = obras_aux[index];
    });
    
    var search = ['resumen_tuplast', 'mensaje_clientes_1', 'mensaje_clientes_2'];
    $scope.infos = {};
    
    InfosService.getDataMany(search, function(data) {
        angular.forEach(search, function(value, key) {
            $scope.infos[value] = data.info[value];
        });
    });
    
    ClientesService.get(function(data) {
        $scope.clientes = data.clientes;
        angular.forEach($scope.clientes, function(value, key) {
            value.delay = Math.floor(Math.random() * 4) + 0;
        });
        $scope.progressbar.complete();
    });
    
    $scope.animateElementIn = function($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInUp');
    };

    $scope.animateElementOut = function($el) {
        if (controladorWhenVisible !== 5) {
            $el.addClass('not-visible');
            $el.removeClass('animated fadeInUp');
            controladorWhenVisible++;
        }
    };
    
    $scope.hoverLineaProductos = function($event) {
        $($event.currentTarget).find('.linea-productos-imagen img').addClass('animated fadeIn delay-1');
        $($event.currentTarget).find('.linea-productos-imagen img').removeClass('not-visible');
    };
    
    $scope.hoverCarteraClientes = function($event, hover) {
        if (hover) {
            $($event.currentTarget).find('.cartera-clientes-description').css('display', 'none');
            $($event.currentTarget).find('.cartera-clientes-logos').css('display', 'block');
        } else {
            $($event.currentTarget).find('.cartera-clientes-description').css('display', 'block');
            $($event.currentTarget).find('.cartera-clientes-logos').css('display', 'none');
        }
    };
    
    $('.dropdown-toggle').dropdown();
});
