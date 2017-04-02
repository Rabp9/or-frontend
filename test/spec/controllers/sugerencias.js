'use strict';

describe('Controller: SugerenciasCtrl', function () {

  // load the controller's module
  beforeEach(module('tuplastFrontendApp'));

  var SugerenciasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SugerenciasCtrl = $controller('SugerenciasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SugerenciasCtrl.awesomeThings.length).toBe(3);
  });
});
