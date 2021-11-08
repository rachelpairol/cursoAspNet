var teclas= {
    UP: 38,
    DOWN: 40,
    RIGTH:39,
    LEFT: 37
};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_dibujo");
var papel= cuadro.getContext("2d");
var x=150;
var y=150;
function dibujarlineas(color, xinicial, yinicial, xfinal,yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarlineas("red", 149,149,151,151, papel);

function dibujarTeclado (evento)
{
    var color= "red";
    var movimiento=1;
    switch(evento.keyCode)
    {
        case teclas.DOWN:
            dibujarlineas(color, x,y,x,y+movimiento, papel);
            y= y+movimiento;
        break;
        case teclas.UP: 
            dibujarlineas(color, x,y,x,y-movimiento, papel);
            y= y-movimiento;
        break;
        case teclas.LEFT:
            dibujarlineas(color, x,y,x-movimiento,y, papel);
            x= x-movimiento;
        break;
        case teclas.RIGTH:
            dibujarlineas(color, x,y,x+movimiento,y, papel);
            x= x+movimiento;
        break;
        default: console.log("Otra tecla")
            break;
    }
}