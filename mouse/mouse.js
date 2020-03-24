
document.addEventListener("mousemove" , dibujarMouse);
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
function dibujarMouse(event,vetX,vetY)
{


var color= "blue";
var move = 10;
var vetX = event.clientX;
var vetY = event.clientY;
dibujarLinea(color, x, y,vetX,vetY,cartulina);
x = vetX;
y = vetY;


}
