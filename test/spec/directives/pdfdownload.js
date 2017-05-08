'use strict';

describe('Directive: pdfDownload', function () {

  // load the directive's module
  beforeEach(module('tuplastFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pdf-download></pdf-download>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pdfDownload directive');
  }));
});
