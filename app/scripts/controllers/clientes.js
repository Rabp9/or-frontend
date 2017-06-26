'use strict';

/**
 * @ngdoc function
 * @name tuplastFrontendApp.controller:ClientesCtrl
 * @description
 * # ClientesCtrl
 * Controller of the tuplastFrontendApp
 */
angular.module('tuplastFrontendApp')
.controller('ClientesCtrl', function ($scope, ClientesService, ngProgressFactory, 
    NgMap, HeadersService) {
    
    $scope.loading_clientes = true;
    $scope.loading_ciudades = true;
    
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    
    $scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBN3iXCosOm01j8X97QyrYYGfGRRRuyMFY';

    HeadersService.getByDescripcion({descripcion: 'clientes'}, function(data) {
        $scope.imagen = 'img/headers/' + data.header.url;
    });
    
    NgMap.getMap().then(function(map) {
        $scope.map = map;
        google.maps.event.trigger(map, 'resize'); 
    });
    
    $scope.showCliente = function(event, cliente) {
        $scope.selectedCliente = cliente;
        $scope.map.showInfoWindow('myInfoWindow', this);
    };

    ClientesService.getCiudades(function (data) {
        $scope.ciudades = data.ciudades;
        $scope.progressbar.complete();
        $scope.loading_ciudades = false;
        
        $scope.loading_clientes = true;
        ClientesService.getClientesByCiudad({ciudad: $scope.ciudades[0]}, function(data) {
            $scope.clientes = data.clientes;
            $scope.loading_clientes = false;
            
            $scope.ciudad_lat = data.clientes[0].latitud;
            $scope.ciudad_lng = data.clientes[0].longitud;
        });
    });
    
    $scope.getClientesByCiudad = function (ciudad, event) {
        $('#ulCiudades li').removeClass('active');
        $(event.currentTarget).parent().addClass('active');
        
        $scope.loading_clientes = true;
        ClientesService.getClientesByCiudad({ciudad: ciudad}, function(data) {
            $scope.clientes = data.clientes;
            $scope.ciudad_lat = data.clientes[0].latitud;
            $scope.ciudad_lng = data.clientes[0].longitud;
            if ($scope.clientes.length === 1) {
                $scope.include_markers = false;
            } else {
                $scope.include_markers = true;
            }
            $scope.loading_clientes = false;
        });
    };
    
});