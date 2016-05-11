'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpy('weather', ['isStormy']);
  });

  describe('Weather is not stormy', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
    });

    it ('has no planes by default', function(){
      expect(airport.planes()).toEqual([]);
    });

    it ('can clear planes for landing', function(){

      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function(){

    it('does not clear planes for takeoff', function(){
      spyOn(Math, 'random').and.returnValue(0);
      airport.clearForLanding(plane);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
    it('does not allow planes to land', function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });

  });

});
