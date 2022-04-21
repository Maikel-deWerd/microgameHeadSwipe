//aangeven van de coordinaten
var y = 0;
var x = 0;
var blok = document.getElementById("blok");
delta_x = 0;
delta_y = 0;

//wanneer de muis wordt ingedrukt gaat het naar deze functie
blok.onmousedown = savePosition;
blok.addEventListener("onmousedown", savePosition, false);
//wanneer de muis wordt losgelaten gaat het naar deze functie
document.onmouseup = clearPosition;

function savePosition(event) {
  //kijkt naar de positie van het blok
  if (event) {
    x = event.pageX;
    y = event.pageY;
  }
  //aangeven positionering van het blok
  x_blok = blok.offsetLeft;
  y_blok = blok.offsetTop;
  
  delta_x = x_blok - x;
  delta_y = y_blok - y;
  
  //wanneer de muis beweegt gaat het naar deze functie
  document.onmousemove = moveBlok;
  document.addEventListener("onmousemove", moveBlok, false);
}

function moveBlok(event) {
  //kijkt naar de positie waar het blok wordt gesleept
  if (event) {
    x = event.pageX;
    y = event.pageY;
  }
  
  //nieuwe positie aangeven en opslaan van het blok
  new_x = delta_x + x;
  new_y = delta_y + y;
  blok.style.top = new_y + "px";
  blok.style.left = new_x + "px";
}

function clearPosition() {
    // Wanneer de muis wordt losgelaten schiet het blok terug
    new_x = 0;
    new_y = Math.random() * 100 + "px";  
    blok.style.top = new_y + "px";
    blok.style.left = new_x + "px";
    //laat het blok los wanneer de muis wordt losgelaten
    document.onmousemove = null; 
}