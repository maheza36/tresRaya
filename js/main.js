var Items = ["X","O","X","O","X","O","X","O","X","O"]; //los items que debe colocar
var item= " " ;
var game_mode=true; //verifica que no haya ganador.
var options;
var buttons_options;
var winner_game;
var status_game_x;
var status_game_o;
var tac_tac = {
set_item:function(button){
  return function(){
    if(button.innerHTML==="" && game_mode){ //valida que el campo donde se de clic este vacio y que el juego este activo
      console.log(game_mode);
      var item = Items.shift();
      button.innerHTML =  item;
      //winner(item);
      if(winner(item)){
        winner_game.innerHTML = "gano " + item;
        status_game(item);
      }
    }else {
      alert("la casilla ya fue jugada, seleccione otra");
    }
  };
}
};

var winner = function(letter){
  console.log(letter);
  console.log(winner_game);
  var options = document.getElementById("game-play");
  //b_o = buttons_options se cambia para reducir código
  var b_o = options.querySelectorAll("#options button");
  var i=0;
  for(i=0;i<b_o.length;i++){
    if(b_o[0].textContent === letter &&
    b_o[1].textContent === letter && b_o[2].textContent === letter){
      game_mode = false;
      return true;
    }else if (b_o[3].textContent === letter &&
    b_o[4].textContent === letter && b_o[5].textContent === letter) {
      game_mode = false;
      return true;
    }else if (b_o[6].textContent === letter &&
    b_o[7].textContent === letter && b_o[8].textContent === letter) {
      game_mode = false;
      return true;
    }else if(b_o[2].textContent === letter &&
    b_o[5].textContent === letter && b_o[8].textContent===letter){
      game_mode = false;
      return true;
    }else if(b_o[1].textContent === letter &&
    b_o[4].textContent === letter && b_o[7].textContent===letter){
      game_mode = false;
      return true;
    }else if(b_o[0].textContent === letter &&
    b_o[3].textContent === letter && b_o[6].textContent === letter){
      game_mode = false;
      return true;
    }else if (b_o[2].textContent === letter &&
    b_o[4].textContent === letter && b_o[6].textContent===letter) {
      game_mode = false;
      return true;
    }else if(b_o[8].textContent === letter &&
    b_o[4].textContent === letter && b_o[0].textContent===letter){
      game_mode = false;
      return true;
    }else {
      if(!check_winner()){
        return false;
      }
      else{
        alert("Empate, favor reiniciar");
        return false;
      }
    }
  }
};

var check_winner = function(){
  var i=0;
  for (i=0;i<buttons_options.length;i++){
    if(buttons_options[i].innerHTML === ""){
      return false;
    }
  }
  return true;
};

var status_game = function(letter){
  if(letter === "X"){
    var x = parseInt(status_game_x.textContent);
    x += 1;
    status_game_x.innerHTML = x;
  }else{
    var o = parseInt(status_game_o.textContent);
    o += 1;
    status_game_o.innerHTML = o;
  }
};

var reset_game = function(){
  Items = ["X","O","X","O","X","O","X","O","X","O"];
  item = "";
  var i=0;
  for(i=0;i<buttons_options.length;i++){
    buttons_options[i].innerHTML = "";
  }
  winner_game.innerHTML="";
  game_mode = true;
};

document.addEventListener("DOMContentLoaded",function(){
  options = document.getElementById("game-play");
  buttons_options = options.querySelectorAll("#options button");
  var i=0;
  for(i=0;i<buttons_options.length;i++){
    buttons_options[i].addEventListener(
      "click",
      tac_tac.set_item(buttons_options[i])
    );
  }
  winner_game = document.getElementById("winner-game");
  status_game_x = document.getElementById("status-game-x");
  status_game_o = document.getElementById("status-game-o");
  document.getElementById("reset-game").addEventListener("click",reset_game);
});
