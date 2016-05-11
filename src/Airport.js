"use strict";

function Airport(){
  this._hanger = [];
}
Airport.prototype.planes = function(){ return this._hanger; };
Airport.prototype.clearForLanding = function(plane){
  this._hanger.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane){
  this._hanger = [];
};
