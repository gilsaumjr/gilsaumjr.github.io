let gramado;
let torcida;
let chute;
let gol;

function preload(){
  gramado = loadImage("imagens/campo.jpg");
  torcida = loadSound("som/som de estadio.mp3")
  chute = loadSound("som/chute.mp3");
  gol = loadSound("som/gol.mp3")
}

function mostrarGols(){
  fill(176,224,230);
  rect(212,2,30,30,5,5);
  rect(362,2,30,30,5,5);
  fill(0,0,0);
  textSize(25);
  text(golCasa, 220, 25);
  text(golVisitante, 370, 25);
  
}

