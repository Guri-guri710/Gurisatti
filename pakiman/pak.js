var imagenes = [];
imagenes ["cauchin"]="vaca.png";
imagenes ["pocacho"]="pollo.png";
imagenes ["tosinauro"]="cerdo.png";


var coleciones=[];

coleciones.push(new Pakiman("pocacho",300,30));
coleciones.push(new Pakiman("tosinauro",200,50));
coleciones.push( new Pakiman("cauchin", 400,40));

for(danielito of  coleciones)
{

  danielito.mostrar();
}

for(var x in imagenes)
{
console.log(x);

}
