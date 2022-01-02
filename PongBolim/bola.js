let xBola = 302;
let yBola = 210;
let diametro = 20;
let raio = diametro/2;

let velocidadeXBola = 3;
let velocidadeYBola = 3;

let colisao = false;

let golCasa = 0;
let golVisitante = 0;

function mostraBola(){
  circle(xBola,yBola,diametro);
}

function movimentaBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function colisaoBorda(){
  if(xBola + raio > width-10 ||xBola - raio <= 10){
     velocidadeXBola *= -1;
    } 
  if(yBola + raio > height-9||yBola - raio < 36){
     velocidadeYBola *= -1;
  }
}

function contatoBolaTimeDaCasa(){
  for (let i=0; i <2; i++){
    colidiu = collideRectCircle(xTimeDaCasa[i],yTimeDaCasa[i],TimeDaCasaComprimento,TimeDaCasaAltura, xBola, yBola, raio);
  if(colidiu){
    velocidadeXBola *= -1;
    chute.play();
    }
  }
}
  
function contatoBolaTimeVisitante(){
  for (let i=0; i <2; i++){
    colidiu = collideRectCircle(xTimeVisitante[i],yTimeVisitante[i],TimeVisitanteComprimento,TimeVisitanteAltura, xBola, yBola, raio);
  if(colidiu){
    velocidadeXBola *= -1;
    chute.play();
    }
  }
}

function marcacaoGol(){
  if(xBola + raio > width-10&&yBola + raio > 155 && yBola - raio < 155+traveAltura){
      golCasa++;
      gol.play();
      reinicio();
    } 
  if(xBola - raio <= 10 && yBola + raio > 155 && yBola - raio < 155+traveAltura){
      golVisitante++;
      gol.play();
      reinicio();
  }
}

function reinicio(){
  xBola = 302;
  yBola = 210;
}

    