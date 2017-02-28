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
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };

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
    $stateProvider.state(mainState);
    $stateProvider.state(productosState);
    $stateProvider.state(productosDetailState);
    $urlRouterProvider.when('', '/');
})
.run(function($rootScope, $interval, $state) {

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
    });

    $rootScope.$on('$stateChangeCancel', function() {

        //hide loading gif
        $rootScope.layout.loading = false;
    });
   
    $rootScope.refresh = function() {
        $state.reload();
    }
    
});