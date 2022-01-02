function setup() {
  createCanvas(600, 400);
  torcida.loop();
}

function draw() {
  //background(gramado);
  background(34,139,34);
  relvado();
  fill(255,250,250)
  mostrarTrave();
  mostraBola();
  fill(255,255,0);
  mostrarTimeDaCasa();
  fill(0,0,255);
  mostrarTimeVisitante();
  movimentaBola();
  colisaoBorda();
  moveTimeDaCasa();
  moveTimeVisitante();
  contatoBolaTimeDaCasa();
  contatoBolaTimeVisitante();
  mostrarGols();
  marcacaoGol();
}