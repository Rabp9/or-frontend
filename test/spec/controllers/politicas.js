'use strict';

describe('Controller: PoliticasCtrl', function () {

  // load the controller's module
  beforeEach(module('tuplastFrontendApp'));

  var PoliticasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PoliticasCtrl = $controller('PoliticasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PoliticasCtrl.awesomeThings.length).toBe(3);
  });
});
