'use strict';

describe('Service: InfosService', function () {

  // load the service's module
  beforeEach(module('tuplastFrontendApp'));

  // instantiate service
  var InfosService;
  beforeEach(inject(function (_InfosService_) {
    InfosService = _InfosService_;
  }));

  it('should do something', function () {
    expect(!!InfosService).toBe(true);
  });

});
