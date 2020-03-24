

var teclas={
   UP: 38,
   DOWN: 40,
   LEFT: 37,
   RIGHT: 39
};
console.log(teclas);
document.addEventListener("keydown" , dibujarTeclado);

var recuadro= document.getElementById('areaDeDibujo');
var cartulina = recuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x -1,y-1,x+1,y+1,cartulina);




function dibujarLinea(color,xinicial,yinicial,yfinal,xfinal,lienzo){

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(yfinal,xfinal);
  lienzo.stroke();
  lienzo.closePath();

}



function dibujarTeclado(event)
{
  var colorcito = "blue";
  var movimiento = 1;

   switch (event.keyCode) {
     case teclas.UP:
     console.log("vamos pa arriba");
     dibujarLinea(colorcito,x,y,x,y - movimiento,cartulina);
     y = y - movimiento;
       break;
     case teclas.DOWN:
     console.log("vamos pa abajo");
     dibujarLinea(colorcito,x,y,x,y + movimiento,cartulina);
     y = y + movimiento;
       break;
     case teclas.LEFT:
     console.log("vamos pa izquierda");
     dibujarLinea(colorcito,x, y ,x - movimiento,y,cartulina );
     x =  x - movimiento;
      break;
     case teclas.RIGHT:
     console.log("vamos pa derecha");
     dibujarLinea(colorcito,x, y ,x + movimiento,y,cartulina );
     x =  x + movimiento;
       break;
     default:
     console.log("otra tecla");

   }
  }
