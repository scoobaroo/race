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

  $('#textbox').keypress(function(event){
    console.log("textbox keypress");
    if(event.keyCode === 76 || event.which=== 76) {
        $('#player1').animate({
            'marginLeft' : "+=200px"
        });
      }
    });

  $(document).keydown(function(event) {
      console.log("document keypress");
      if(event.keyCode === 76 || event.which=== 76) {
          $('#player2').animate({
              'marginLeft' : "+=40px"
          });
      }});

  $(document).keydown(function(event) {
      if(event.keyCode === 65 || event.which === 65) {
          $('#player1').animate({
              'marginLeft' : "+=40px"
          });
      }});

  if ($("#player1").css('margin-left') >= 1375) {
    alert ("Player 1 won");
  }

  if ($("#player2").css('margin-left') >= 1375) {
    alert ("Player 2 won");
  }
});
