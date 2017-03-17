'use strict';

/**
 * @ngdoc overview
 * @name tuplastFrontendApp
 * @description
 * # tuplastFrontendApp
 *
 * Main module of the application.
 */
angular
.module('tuplastFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-scroll-animate',
    'ui.router',
    'bootstrapHoverAnimationDropdown',
    'thatisuday.ng-image-gallery'
])
.config(function($stateProvider, $urlRouterProvider, ngImageGalleryOptsProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };

    var quienesSomosState = {
        name: 'quienesSomos',
        url: '/quienes-somos',
        templateUrl: 'views/quienes-somos.html',
        controller: 'QuienesSomosCtrl',
        controllerAs: 'quienesSomos',
        title: '¿Quiènes Somos?'
    };
    
    var politicasState = {
        name: 'politicas',
        url: '/politicas',
        templateUrl: 'views/politicas.html',
        controller: 'PoliticasCtrl',
        controllerAs: 'politicas',
        title: 'Políticas'
    }

    var productosState = {
        name: 'productos',
        url: '/productos',
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl',
        controllerAs: 'productos',
        title: 'Productos'
    };
    
    var productosDetailState = {
        name: 'productos.detail',
        url: '/{id}',
        templateUrl: 'views/productos-detail.html',
        controller: 'ProductosDetailCtrl',
        params: {
            id: {
                value: '1'
            }
        }
    };
    
    var clientesState = {
        name: 'clientes',
        url: '/clientes',
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl',
        controllerAs: 'clientes',
        title: 'Clientes'
    };
    
    var pagesState = {
        name: 'pages',
        url: '/pages',
        templateUrl: 'views/pages.html',
        controller: 'PagesCtrl',
        controllerAs: 'pages'
    };
    
    var bolsaTrabajoState = {
        name: 'bolsaTrabajo',
        url: '/bolsa-trabajo',
        templateUrl: 'views/bolsa-trabajo.html',
        controller: 'BolsaTrabajoCtrl',
        controllerAs: 'bolsaTrabajo',
        title: 'Bolsa de Trabajo'
    };
    
    var plantaIndustrialState = {
        name: 'plantaIndustrial',
        url: '/planta-industrial',
        templateUrl: 'views/planta-industrial.html',
        controller: 'PlantaIndustrialCtrl',
        controllerAs: 'plantaIndustrial'
    };
    
    var sugerenciasState = {
        name: 'sugerencias',
        url: '/sugerencias',
        templateUrl: 'views/sugerencias.html',
        controller: 'SugerenciasCtrl',
        controllerAs: 'sugerencias'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(quienesSomosState);
    $stateProvider.state(politicasState);
    $stateProvider.state(productosState);
    $stateProvider.state(productosDetailState);
    $stateProvider.state(clientesState);
    $stateProvider.state(pagesState);
    $stateProvider.state(bolsaTrabajoState);
    $stateProvider.state(plantaIndustrialState);
    $stateProvider.state(sugerenciasState);
    $urlRouterProvider.when('', '/');
    
    ngImageGalleryOptsProvider.setOpts({
        thumbnails: true,
        inline:   false,
        imgBubbles:   false, 
        bgClose:   true,
        bubbles:   true, 
        imgAnim:   'fadeup'
    });
})
.run(function($rootScope, $interval, $state, $window) {

    $rootScope.showChat = function() {
        $window.open('#/chat/', '_blank', 'Chat Online');
    };
    
    $rootScope.layout = {};
    $rootScope.layout.loading = false; 
            
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

        //show loading gif
        $rootScope.layout.loading = true;
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toParams, fromState, fromParams) {
        // hide loading gif
        $rootScope.counter = 0;
        $rootScope.total_counts = 50;
        $interval(function() {
            $rootScope.counter++;
            if($rootScope.counter == $rootScope.total_counts) {
                $rootScope.layout.loading = false;
            }
        }, 10, $rootScope.total_counts);

        // setting title
        $rootScope.title = $state.current.title;
        
        $window.scrollTo(0, 0);
    });

    $rootScope.$on('$stateChangeCancel', function() {

        //hide loading gif
        $rootScope.layout.loading = false;
    });
   
    $rootScope.refresh = function() {
        $state.reload();
    }
    
});