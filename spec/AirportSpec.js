'use strict';

describe('Airport', function(){
  var airport;
  beforeEach(function){
    airport = new Airport();
  });
it('can recieve a plane', function(){
  expect(airport.clearForLanding).not.toBeUndefined()
});
  });
