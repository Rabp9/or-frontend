'use strict';

describe('Service: obrasService', function () {

  // load the service's module
  beforeEach(module('tuplastFrontendApp'));

  // instantiate service
  var obtasService;
  beforeEach(inject(function (_obtasService_) {
    obtasService = _obtasService_;
  }));

  it('should do something', function () {
    expect(!!obtasService).toBe(true);
  });

});
