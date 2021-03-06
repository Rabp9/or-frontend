'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('MainCtrl', function ($scope, $window, SlidesService, ProductosService, 
    ObrasService, InfosService, ClientesService, ngProgressFactory, $q, $rootScope,
    $interval) {
        
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.path_logos = angular.module('tuplastFrontendApp').path_location + 'img/' + 'clientes/';
    var currIndex = 0;
    
    var controladorWhenVisible = 0;
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
  
    function getProductosMain() {
        $interval(function() {
            ProductosService.getProductosMain(function(data) {
                $scope.productos = data.productos;
                angular.forEach($scope.productos, function(value, key) {
                    if (value !== undefined) {
                        var char_count = value.title.length;
                        var lineaProducto = $('.linea-productos-header').eq(key);
                        if (char_count > 0 && char_count < 16) {
                            $(lineaProducto).css('padding', '0px 75px');
                        } else if (char_count >= 16 && char_count < 35) {
                            $(lineaProducto).css('padding', '0px 28px');
                        } else if (char_count >= 35) {
                            $(lineaProducto).css('padding', '0px 0px');
                            $(lineaProducto).css('font-size', '26px');
                        }
                    }
                });
            });
        }, 5000);
    }
    
    function init() {
        $rootScope.layout.loading = true;
        var search = ['resumen_tuplast', 'mensaje_clientes_1', 'mensaje_clientes_2'];
        $scope.infos = {};
        
        $q.all([
            SlidesService.get().$promise,
            ObrasService.getRandom().$promise,
            InfosService.getDataMany(search).$promise,
            ClientesService.getRubros().$promise
        ]).then(function(data) {
            // Slides
            $scope.slides = data[0].slides;
            $scope.height_slide = $window.innerHeight - (1 + 50 + 80 + (25 * 2)); // 50: $navbar-height, 80: $navbar-header-top-height, 25: $navbar-header-top-margin
            angular.forEach($scope.slides, function(value, key) {
                $scope.slides[key].index = currIndex;
                
                if ($scope.slides[key].color_bg !== null) {
                    var hex = $scope.slides[key].color_bg.replace('#', ''),
                    r = parseInt(hex.substring(0,2), 16),
                    g = parseInt(hex.substring(2,4), 16),
                    b = parseInt(hex.substring(4,6), 16),
                    result = 'rgba('+ r + ',' + g + ',' + b + ', 0.8)';
                    $scope.slides[key].color_bg = result;
                }
                
                currIndex++;
            });
            
            // Obras
            $scope.obra = data[1].obra;
            
            // Infos
            angular.forEach(search, function(value, key) {
                $scope.infos[value] = data[2].info[value];
            });
            
            // Clientes Rubros
            $scope.rubros = data[3].rubros;

            angular.forEach($scope.rubros, function (value, key) {
                if (value.rubro === '') {
                    value.rubro = 'Otros';
                }
                value.clientes = value.clientes.slice(0, 8);
                angular.forEach(value.clientes, function (v_cliente, k_cliente) {
                    v_cliente.delay = Math.floor(Math.random() * 4) + 0;                    
                });
            });
            
            // Complete
            $scope.progressbar.complete();
            $rootScope.layout.loading = false;
        });
        getProductosMain();
    }
    
    init();
        
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
