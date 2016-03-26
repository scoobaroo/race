$(document).on("ready", function(){

  function makeCar(color){
    this.color = color;
    this.drive = function drive(event){};
    this.position = function position(){};
  }
  makeCar();

  function makeRaceTrack(length){
    this.length = length;
    this.resetRaceTrack = function resetRaceTrack(){
    };
  }

  // $("button").on("click", $("#player1").css('left',30));
  if($("button").on("click", function(event){
    console.log("reset clicked");
    $("#player1").css('margin-left',10);
    $("#player2").css('margin-left',10);
  }));


  function example_animate(px) {
	$('#player1').animate({
		'marginLeft' : px
	});
  }

  $(document).keydown(function(e) {
      if(e.which == 76) {
          $('#player1').animate({
              'marginLeft' : "+=200px"
          });

      }});
  $(document).keydown(function(e) {
      if(e.which == 65) {
          $('#player2').animate({
              'marginLeft' : "+=200px"
          });
      }});
});

  $("#player1").css('margin-left',1375);
