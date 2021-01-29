var x_wert=495; 

var y_wert=465; 

var treffer = 100; 

function setup() { 

  createCanvas(500, 500); 

  background('White'); 

  frameRate(50); 

} 

function draw() { 

  background('White'); 

  fill('Green') 

  ellipse(x_wert, y_wert, 30, 30) 

  fill('Red') 

  ellipse(5, 45, 30, 30) 

  strokeWeight(3) 

line(0, 30, 100, 30) 

line(0, 60, 70, 60) 

line(100, 30, 100, 120) 

line(70, 60, 70, 150) 

line(70, 150, 380, 150) 

line(100, 120, 410, 120) 

line(380, 150, 380, 270) 

line(410, 120, 410, 300) 

line(380, 270, 230, 270) 

line(410, 300, 200, 300) 

line(230, 270, 230, 190) 

line(200, 300, 200, 220) 

line(230, 190, 90, 190) //mittlerer Teil links der "Tunnel" 

line(200, 220, 120, 220) 

line(90, 190, 90, 400) 

line(120, 220, 120, 370) 

line(90, 400, 300, 400) 

line(120, 370, 330, 370) 

line(300, 400, 300, 480) 

line(330, 370, 330, 450) 

line(300, 480, 500, 480) 

line(330, 450, 500, 450) 

  linie(x_wert, y_wert); 

  kreis(mouseX, mouseY); 

  fill('Black'); 

  textSize(25); 

  textAlign(LEFT); 

  text('Punkte: ' + treffer, 20, 30); 

  textSize(9); 

  text('Start', 1, 48) 

  text('Ziel', 483, 468) 

} 

function mouseMoved() { 

  if (dist(x_wert-100, y_wert-100, mouseX, mouseY) < 20) { 

    treffer = treffer - 1; 

  } 

   if (mouseY >470){ 

    treffer = treffer -1; 

  } 

  if (mouseY <40){ 

    treffer = treffer -1; 

  } 

  if (mouseX <80 && mouseY >50){ 

    treffer = treffer -1; 

  } 

  if (mouseX <230 && mouseY <200 && mouseY >140) { 

    treffer = treffer -1; 

  } 

  if (mouseX <100 && mouseY >150){ 

    treffer = treffer -1; 

  } 

  if (mouseX <310 && mouseY >390){ 

    treffer = treffer -1; 

  } 

  if (mouseX >90 && mouseY <130){ 

    treffer = treffer -1; 

  } 

  if (mouseX >400 && mouseY <460){ 

    treffer = treffer -1; 

  } 

  if (mouseX >110 && mouseY <380 && mouseY >210 && mouseX <210){ 

    treffer = treffer -1; 

  } 

  if (mouseX >110 && mouseY <380 && mouseY >290){ 

    treffer = treffer -1; 

  } 

  if (mouseX >320 && mouseY >290 && mouseY <460){ 

    treffer = treffer -1; 

  } 

  if (mouseY >140 && mouseY <280 && mouseX >220 && mouseX <390){ 

    treffer = treffer -1; 

  } 

  if (mouseX <80 && mouseY >50){ 

    treffer = treffer -1; 

  } 

  if (mouseX <230 && mouseY <200 && mouseY >140) { 

    treffer = treffer -1; 

  } 

  if (mouseX <100 && mouseY >150){ 

    treffer = treffer -1; 

  } 

  if (mouseX <310 && mouseY >390){ 

    treffer = treffer -1; 

  } 

} 

function kreis(kreis_x, kreis_y) { 

  strokeWeight(0); 

  fill('Black'); 

  ellipse(kreis_x, kreis_y, 20, 20); 

} 

function linie(linie_x, linie_y) { 

   

  strokeWeight(0) 

  fill('Red'); 

} 

 