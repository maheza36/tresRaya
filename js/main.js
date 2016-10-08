var Items = ["X","O","X","O","X","O","X","O","X","O"];
var item= " " ;
var tac_tac = {
set_item:function(button){
  return function(){
    var item = Items.shift();
    button.textContent =  item;
    winner();
  };
}
};

var winner = function(){
  var options = document.getElementById("game-play");
  //b_o = buttons_options se cambia para reducir código
  var b_o = options.querySelectorAll("#options button");
  var i=0;
  for(i=0;i<b_o.length;i++){
    if(b_o[0].textContent === b_o[1].textContent &&
    b_o[1].textContent === b_o[2].textContent){
      console.log("gano");
    }else if (b_o[3].textContent === b_o[4].textContent &&
    b_o[4].textContent === b_o[5].textContent) {
      console.log("gano");
    }else if (b_o[6].textContent === b_o[7].textContent &&
    b_o[7].textContent === b_o[8].textContent) {
      console.log("gano");
    }else if(b_o[2].textContent === b_o[5].textContent &&
    b_o[5].textContent === b_o[8].textContent){
      console.log("gano");
    }else if(b_o[1].textContent === b_o[4].textContent &&
    b_o[4].textContent === b_o[7].textContent){
      console.log("gano");
    }else if(b_o[0].textContent === b_o[3].textContent &&
    b_o[3].textContent === b_o[6].textContent){
      console.log("gano");
    }else if (b_o[2].textContent === b_o[4].textContent &&
    b_o[4].textContent === b_o[6].textContent) {
      console.log("gano");
    }else if(b_o[8].textContent === b_o[4].textContent &&
    b_o[4].textContent === b_o[0].textContent){
      console.log("gano");
    }else {
      console.log("no ha ganado");
    }
  }
};

var reset_game = function(){
  var Items = ["X","O","X","O","X","O","X","O","X","O"];
  var item = "";
  var i=0;
};

document.addEventListener("DOMContentLoaded",function(){
  console.log("cargar el dom");
  var options = document.getElementById("game-play");
  var buttons_options = options.querySelectorAll("#options button");
  console.log(buttons_options);
  var i=0;
  for(i=0;i<buttons_options.length;i++){
    console.log(i);
    buttons_options[i].addEventListener(
      "click",
      tac_tac.set_item(buttons_options[i])
    );
  }
});
