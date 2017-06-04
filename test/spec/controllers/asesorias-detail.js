'use strict';

describe('Controller: AsesoriasDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('tuplastFrontendApp'));

  var AsesoriasDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsesoriasDetailCtrl = $controller('AsesoriasDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AsesoriasDetailCtrl.awesomeThings.length).toBe(3);
  });
});
