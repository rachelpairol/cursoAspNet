var ruta=window.location;
        console.log(ruta);
        document.write("Estás en:"+ ruta);

var d =document.getElementById("dibujito");
ancho= d.width;
var lienzo= d.getContext("2d");
console.log(lienzo);

var l;
var yin,xfin,xfininv;

var cdalineas= document.getElementById("cdalineas");
var boton1= document.getElementById("btn1");


boton1.addEventListener("click", dibujoporclick);

function dibujarlineas(color, xinicial, yinicial, xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

/*dibujarlineas("red", 1,1,1,299);
dibujarlineas("red", 1,299,299,299);
dibujarlineas("red", 299,299,299,1);
dibujarlineas("red", 299,1,1,1);*/


function dibujoporclick()
{
  
   var lineas = parseInt(cdalineas.value);

    for(l=0;l<lineas;l++)
    {
    yin=(ancho/lineas) *l;
    xfin=(l+1)*(ancho/lineas);
    xfininv=(ancho-(l+1)*(ancho/lineas));
    
    
    dibujarlineas("red", 0,yin,xfin,300);
    dibujarlineas("red", 300,yin,xfininv,300);
    dibujarlineas("red", 0,yin,xfininv,0);
    dibujarlineas("red", 300,yin,xfin,0);
    console.log("linea "+l);
    console.log("xin "+yin);
    console.log("xfin "+xfin);
    }
}

