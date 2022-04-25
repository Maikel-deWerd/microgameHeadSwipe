//aangeven van de coordinaten
var y = 0;
var x = 0;
let delta_x = 0;
let delta_y = 0;

let selector = document.querySelectorAll(".blok");


for (let i = 0; i < selector.length; i++) {
  //wanneer de muis wordt ingedrukt gaat het naar deze functie
  selector[i].onmousedown = savePosition(selector[i]);
  selector[i].addEventListener("onmousedown", savePosition, false);
  //wanneer de muis wordt losgelaten gaat het naar deze functie
  document.onmouseup = clearPosition;
}
  

function savePosition(event) {
  for (let i = 0; i < selector.length; i++) {
    //kijkt naar de positie van het blok
    if (event) {
      x = event.pageX;
      y = event.pageY;
    }
    console.log(delta_y - 8); //delta herkent het naar de tweede keer niet meer
    //aangeven positionering van het blok
    x_blok = selector[i].offsetLeft;
    y_blok = selector[i].offsetTop;
    delta_x = x_blok - x;
    delta_y = y_blok - y;
    
    //wanneer de muis beweegt gaat het naar deze functie
    document.onmousemove = moveBlok;
    document.addEventListener("onmousemove", moveBlok, false);
  }
  
}

function moveBlok(event) {
  for (let i = 0; i < selector.length; i++) {
    //kijkt naar de positie waar het blok wordt gesleept
    if (event) {
      x = event.pageX;
      y = event.pageY;
    }

    console.log(x)
    console.log(y)

    //nieuwe positie aangeven en opslaan van het blok
    new_x = delta_x + x;
    new_y = delta_y + y;

    selector[i].style.top = new_y + "px";
    selector[i].style.left = new_x + "px";

    console.log(new_y)
    console.log(new_x)
  }
  
}

//nulwaarde van de blokken die inspawnen
let spawn = 0

function clearPosition() {
  for (let i = 0; i < selector.length; i++) {
    // Wanneer de muis wordt losgelaten schiet het blok terug
    new_x = 20;
    new_y = Math.random() * 100 + "px";  
    selector[i].style.top = new_y + "px";
    selector[i].style.left = new_x + "px";
    //laat het blok los wanneer de muis wordt losgelaten
    document.onmousemove = null; 

    //als er drie keer gecleared wordt dan komt er een extra plaatje
    if (spawn == 3){
        spawn = 0;
    }
    spawn = spawn + 1;
  }
}


