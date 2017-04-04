'use strict';

describe('Service: PoliticasService', function () {

  // load the service's module
  beforeEach(module('tuplastFrontendApp'));

  // instantiate service
  var PoliticasService;
  beforeEach(inject(function (_PoliticasService_) {
    PoliticasService = _PoliticasService_;
  }));

  it('should do something', function () {
    expect(!!PoliticasService).toBe(true);
  });

});
