'use strict';

describe('Controller: ObrasDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('tuplastFrontendApp'));

  var ObrasDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ObrasDetailCtrl = $controller('ObrasDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ObrasDetailCtrl.awesomeThings.length).toBe(3);
  });
});
