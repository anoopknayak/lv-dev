'use strict';

describe('Directive: messageEntry', function () {

  // load the directive's module and view
  beforeEach(module('lvApp'));
  beforeEach(module('components/directives/message-entry/message-entry.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<message-entry></message-entry>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the messageEntry directive');
  }));
});