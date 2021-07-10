/*  Texto es un OBJETO */
var texto = document.getElementById("texto_lineas");
/*  boton es un OBJETO*/
var boton = document.getElementById("botoncito");
var limpiar = document.getElementById("limpiando");
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

// Crear una función que dibuje una linea                                       
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    
    lienzo.beginPath();                 /* Le digo a JS que arrancaré un trazo                                      */
    lienzo.strokeStyle = color;         /* Le digo que color será la linea                                          */
    lienzo.moveTo(xinicial, yinicial);  /* Indico de donde va iniciar el trazo                                      */
    lienzo.lineTo(xfinal, yfinal);      /* Indico que trazaré una linea hasta un punto 200,200                      */
    lienzo.stroke();                    /* Es el método que dibujará la linea                                       */    
    lienzo.closePath();                 /* Le indico que pare el trazo                                              */
}


function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var valor = lineas * 1;
    if(isNaN(valor))
    {
        alert("Ingresa un valor numérico");
    }
    else
    {
        /*  Para obtener el valor de un formulario llamo al ATRIBUTO del OBJETO texto
            y conviento el texto en entero con la función parseInt */
        var l = 0;
        var  xi, yi, xf, yf ;
        var espacio = ancho / lineas; 
        lienzo.clearRect(0, 0, d.width, d.height);
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
}