class Billete
{

  constructor(v,c)
  {
    this.valor=v;
    this.cantidad=c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero= parseInt(t.value);
  for (billestes  of caja)
  {
    if(dinero > 0)
    {
        div=Math.floor(dinero/billestes.valor)

        if(div > billestes.cantidad)
          {
          papales= billestes.cantidad;
          }
          else
          {
          papales = div;
          }
          entregado.push(new Billete(billestes.valor,papales));
          dinero = dinero - (billestes.valor*papales);
    }

  }

  if(dinero>0)
  {

  resultado.innerHTML ="soy un cajero muy pobre y no tengo dinero";
  }
  else
  {
    for(var cantidadEntregado of entregado)
    if(cantidadEntregado.catidad > 0)
      {
    resultado.innerHTML +=  cantidadEntregado.cantidad + " billetes de $" + cantidadEntregado.valor + "</br>";
       }
   }
 }


var caja=[];
var entregado=[];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var dinero = 0;
var div = 0;
var papales = 0;

var resultado = document.getElementById("resultado")
var b =document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
