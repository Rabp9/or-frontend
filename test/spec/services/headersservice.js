'use strict';

describe('Service: headersService', function () {

  // load the service's module
  beforeEach(module('tuplastFrontendApp'));

  // instantiate service
  var headersService;
  beforeEach(inject(function (_headersService_) {
    headersService = _headersService_;
  }));

  it('should do something', function () {
    expect(!!headersService).toBe(true);
  });

});
