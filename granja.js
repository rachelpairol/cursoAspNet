var vp = document.getElementById("area_granja");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var fondo = {
  url: "image/tile.webp",
  cargaOK: false
};
var vaca = {
  url: "image/vaca.webp",
  cargaOK: false
};
  
  var pollo = {
    url: "image/pollo.webp",
    cargaOK: false
};
var cerdo = {
  url: "image/cerdo.webp",
  cargaOK: false
};

var cantidad = aleatorio(1, 3);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen=new Image();
pollo.imagen.src= pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

cerdo.imagen=new Image();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var xvaca = aleatorio(0, 7);
      var yvaca = aleatorio(0, 10);
      var xvaca = xvaca * 60;
      var yvaca = yvaca * 40;
      papel.drawImage(vaca.imagen, xvaca, yvaca);
    }
  }
  if(pollo.cargaOK)
    {
      console.log(cantidad);
      for(var v=0; v < cantidad; v++)
      {
        var xpollo = aleatorio(0, 5);
        var ypollo = aleatorio(0, 7);
        var xpollo = xpollo * 60;
        var ypollo = ypollo * 40;
        papel.drawImage(pollo.imagen, xpollo, ypollo);
      }
  }
  
 
  if(cerdo.cargaOK)
    {
      papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
      }
  }

  var teclas= {
    UP: 38,
    DOWN: 40,
    RIGTH:39,
    LEFT: 37
};
      
var xcerdo=150;
var ycerdo=150;

function moverCerdo (evento)
  {
      
      var movimiento=60;
      switch(evento.keyCode)
      {
          case teclas.DOWN:
            ycerdo=ycerdo+movimiento;
               dibujar();       
          
          break;
         case teclas.UP: 
              ycerdo=ycerdo-movimiento;
              dibujar();
          break;
          case teclas.LEFT:
              xcerdo= xcerdo-movimiento;
              dibujar();
          break;
          case teclas.RIGTH:
              xcerdo= xcerdo+movimiento;
              dibujar();
          break;
          default: console.log("Otra tecla")
              break;
      }
    } 
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}