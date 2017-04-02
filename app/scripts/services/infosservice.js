'use strict';

/**
 * @ngdoc service
 * @name tuplastFrontendApp.InfosService
 * @description
 * # InfosService
 * Factory in the tuplastFrontendApp.
 */
angular.module('tuplastFrontendApp')
  .factory('InfosService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
