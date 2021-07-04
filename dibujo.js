/*  Texto es un OBJETO */
var texto = document.getElementById("texto_lineas");
/*  boton es un OBJETO*/
var boton = document.getElementById("botoncito");
/*  El OBJETO boton tiene un evento "click" */
boton.addEventListener("click", dibujoPorClick);

/* Le asignamos a la variable "d" el lienzo/canvas con id "dibujito"
   Me trae un elemento atravez de su ID.
   Utilizamos el MÉTODO "getElementById" del OBJETO "document"                  */
var d = document.getElementById("dibujito");

/* d es un OBJETO que tienen un atributo width, guardo el ATRIBUTO "width" en la 
   variable "ancho"                                                             */
var ancho = d.width;

/* En JS nos permite hacer dibujos en 2D y 3D. Le damos el contexto a canvas de
   que será un dibijo en 2D. E   getContext en un MÉTODO del OBJETO canvas      */
var lienzo = d.getContext("2d"); 

/* Crear una función que dibuje una linea                                       */
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    /* Le digo a JS que arrancaré un trazo                                      */
    lienzo.beginPath();
    
    /* Le digo que color será la linea                                          */
    lienzo.strokeStyle = color;

    /* Indico de donde va iniciar el trazo                                      */
    lienzo.moveTo(xinicial, yinicial); 

    /* Indico que trazaré una linea hasta un punto 200,200                      */
    lienzo.lineTo(xfinal, yfinal);

7    /* Es el método que dibujará la linea                                       */
    lienzo.stroke();

    /* Le indico que pare el trazo                                              */
    lienzo.closePath();
}

function dibujoPorClick()
{
    /*  Para obtener el valor de un formulario llamo al ATRIBUTO del OBJETO texto
        y conviento el texto en entero con la función parseInt */
    var lineas = parseInt(texto.value);
    var l = 0;
    var  xi, yi, xf, yf ;
    var espacio = ancho / lineas; 

    while(l < lineas)
    {
        xi = espacio * l;
        yi = espacio * l;
        xf = espacio * (l + 1);
        yf = espacio * (l + 1);

        /*Mando a llamar la función con los parámetros */
        dibujarLinea("blue", 0, yi, xf, 300);
        dibujarLinea("blue", xi, 0, 300, yf);
        l = l + 1;
    }
}