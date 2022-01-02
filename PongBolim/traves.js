
let xtraves = [5,588]; 
let ytraves = [155,155];
let traveComprimento = 10;
let traveAltura = 115;

function mostrarTrave(){
  for(let i=0; i < 2; i++){
  rect(xtraves[i],ytraves[i],traveComprimento,traveAltura);
  }
}