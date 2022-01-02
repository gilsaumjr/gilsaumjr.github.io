let xTimeVisitante = [220,480]; 
let yTimeVisitante = [170,170];
let TimeVisitanteComprimento = 10;
let TimeVisitanteAltura = 70;

function mostrarTimeVisitante(){
  for(let i=0; i < 2; i++){              rect(xTimeVisitante[i],yTimeVisitante[i],TimeVisitanteComprimento,TimeVisitanteAltura);
  }
}

function moveTimeVisitante(){
  for(let i=0; i <2; i++){
  if(keyIsDown(UP_ARROW)){
    yTimeVisitante[i] -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yTimeVisitante[i] += 10;
  }
  }
}