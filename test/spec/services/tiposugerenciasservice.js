'use strict';

describe('Service: tipoSugerenciasService', function () {

  // load the service's module
  beforeEach(module('tuplastFrontendApp'));

  // instantiate service
  var tipoSugerenciasService;
  beforeEach(inject(function (_tipoSugerenciasService_) {
    tipoSugerenciasService = _tipoSugerenciasService_;
  }));

  it('should do something', function () {
    expect(!!tipoSugerenciasService).toBe(true);
  });

});
