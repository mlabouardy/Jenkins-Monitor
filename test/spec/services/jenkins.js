'use strict';

describe('Service: Jenkins', function () {

  // load the service's module
  beforeEach(module('jenkinsMonitorApp'));

  // instantiate service
  var Jenkins;
  beforeEach(inject(function (_Jenkins_) {
    Jenkins = _Jenkins_;
  }));

  it('should do something', function () {
    expect(!!Jenkins).toBe(true);
  });

});
