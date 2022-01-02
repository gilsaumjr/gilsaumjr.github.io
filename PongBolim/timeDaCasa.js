let xTimeDaCasa = [110,370]; 
let yTimeDaCasa = [170,170];
let TimeDaCasaComprimento = 10;
let TimeDaCasaAltura = 70;

function mostrarTimeDaCasa(){
  for(let i=0; i < 2; i++){              rect(xTimeDaCasa[i],yTimeDaCasa[i],TimeDaCasaComprimento,TimeDaCasaAltura);
  }
}

function moveTimeDaCasa(){
  for(let i=0; i <2; i++){
  if(keyIsDown(87)){
    yTimeDaCasa[i] -= 10;
  }
  if(keyIsDown(83)){
    yTimeDaCasa[i] += 10;
  }
  }
}