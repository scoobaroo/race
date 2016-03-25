$(document).on("ready", function(){

function makeCar(color,make,model,horsepower,torque,suspension){
    this.color = color;
    this.make = make;
    this.mode = model;
    this.horsepower = horsepower;
    this.torque = torque;
    this.suspension = suspension;
    this.drive = function drive(event){};
    this.accelerate = function accelerate(event){};
    this.deccelerate = function deccelerate(evene){};
}

var clock = {time: timeLeft};

function makeRaceTrack(length){
  this.length = length;
  this.resetRaceTrack = function resetRaceTrack(){
  };
}

});
