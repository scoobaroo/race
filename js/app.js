$(document).on("ready", function(){

  if($("button").on("click", function(event){
    console.log("reset clicked");
    $("#player1").css('margin-left',30);
    $("#player2").css('margin-left',30);
  }));

  $(document).keyup(function(event) {
      if(event.keyCode === 76 || event.which=== 76) {
          $('#player2').animate({
              'marginLeft' : "+=40px"
          });
      }});

  $(document).keyup(function(event) {
      if(event.keyCode === 65 || event.which === 65) {
          $('#player1').animate({
              'marginLeft' : "+=40px"
          });
      }});

  var player1score=0;
  $(document).keyup(function(event){
    var a = parseInt($("#player1").css('margin-left'));
    if (a>1350) {
      alert("player 1 wins!");
      player1score++;
      $("body").append("<p>player 1 score: "+player1score+"player 2 score:"+player2score+"</p>");
    }
  });

  var player2score = 0;
  $(document).keyup(function(event){
    var b = parseInt($("#player2").css('margin-left'));
    if (b>1350) {
      alert("player 2 wins!");
      player2score++;
      $("body").append("<p>player 1 score: "+player1score+"player 2 score:"+player2score+"</p>");
    }
  });
});
