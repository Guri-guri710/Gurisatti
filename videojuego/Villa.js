var v =document.getElementById("VillaGuri");
var papel =v.getContext("2d");



var vaca = {

  url:"vaca.png",
  cargaOk:false
};

var fondo = {

  url:"tile.png",
  cargaOk:false
};

var pollo = {

  url:"pollo.png",
  cargaOk:false
};

var cerdo = {

  url:"cerdo.png",
  cargaOk:false
};

var cantidad = Alazar(10,35);
fondo.objeto = new Image();
fondo.objeto.src =fondo.url;
fondo.objeto.addEventListener("load", CargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", CargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", CargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", CargarCerdos);


function CargarVaca()
{
  vaca.cargaOk =true;
  dibujar();
}

function CargarFondo()
{
  fondo.cargaOk =true;
  dibujar();
}

function CargarPollo()
{
  pollo.cargaOk =true;
  dibujar();
}

function CargarCerdos()
{
  cerdo.cargaOk =true;
  dibujar();
}


function dibujar()

{
  if(fondo.cargaOk){
      papel.drawImage(fondo.objeto,0,0);
  }

    console.log(cantidad);
  if(vaca.cargaOk){
    for (var v = 0; v < cantidad; v++) {

    var x= Alazar(0,420);
    var y= Alazar(0,420);
    papel.drawImage(vaca.objeto,x,y);
    }
  }
  if(pollo.cargaOk){
      papel.drawImage(pollo.objeto,100,0);
  }
  if(cerdo.cargaOk){
      papel.drawImage(cerdo.objeto,100,250);
  }

}


function Alazar(max,min)
{
  var resultado;
  resultado = Math.floor(Math.random() *(max - min + 1)) + min;
  return resultado;

}
