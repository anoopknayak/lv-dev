'use strict';

describe('Controller: ComposeCtrl', function () {

  // load the controller's module
  beforeEach(module('lvApp'));

  var ComposeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComposeCtrl = $controller('ComposeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
