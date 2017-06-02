'use strict';

describe('Controller: PlantaIndustrialCtrl', function () {

  // load the controller's module
  beforeEach(module('tuplastFrontendApp'));

  var PlantaIndustrialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlantaIndustrialCtrl = $controller('PlantaIndustrialCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlantaIndustrialCtrl.awesomeThings.length).toBe(3);
  });
});
