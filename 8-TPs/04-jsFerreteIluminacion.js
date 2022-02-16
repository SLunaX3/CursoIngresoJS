/*
Sonia Luna 
DIV I
TP 04 Switch

- El ejercicio original y el primer cambio con Switch
están comentados abajo.

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta 
al mismo precio de $35 pesos final.
 */

function CalcularPrecio () 

//txtIdCantidad
//Marca
//txtIdprecioDescuento
{
 	var cantidadLamparas;
 	var marca;
 	var precioConDescuento;
 	var valorUnidadOferta;
 	var valorPorCantidad;
 	var precioFinal;
 	var descuento;
 	var iiBB;
 	var impuesto;
 	var precioConiiBB;

 	cantidadLamparas = parseInt(document.getElementById('txtIdCantidad').value);
 	marca = document.getElementById('Marca').value;
	precioConDescuento = document.getElementById('txtIdprecioDescuento').value;
 	valorUnidadOferta = 35;
 	valorPorCantidad = valorUnidadOferta * cantidadLamparas;
 	descuento = 0;


/*reemplazar el switch(cantidadLamparas) por un if*/
    if (cantidadLamparas > 0 && cantidadLamparas < 3 ) 
    {
        descuento = 0;
    }
    else 
    {
        if (cantidadLamparas == 3) 
             /* D. Si compra 3  lamparitas bajo consumo 
            marca "ArgentinaLuz" el descuento es del 15%, 
            si es  “FelipeLamparas” se hace un descuento del 10 % 
            y si es de otra marca un 5%.  */
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;

                default:
                    descuento = 5;
            }
        }
        else
        {
            if (cantidadLamparas == 4) 
            /*  C.Si compra 4  lamparitas bajo consumo 
            marca "ArgentinaLuz" o “FelipeLamparas” 
            se hace un descuento del 25 % 
            y si es de otra marca el descuento es del 20%.*/
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                        break;
                
                    default:
                        descuento = 20;
                }
            }
            else
            {
                if (cantidadLamparas == 5) 
               /* B.   Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
                se hace un descuento del 40 % 
                y si es de otra marca el descuento es del 30%. */
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            descuento = 40;
                            break;

                        default:
                            descuento = 30;
                    }
                }
                else
                  /*  A.Si compra 6 o más  lamparitas bajo consumo
                   tiene un descuento del 50%. */
                {
                    descuento = 50;
                }
            }
        }

    precioFinal = valorPorCantidad - valorPorCantidad * descuento /100;

    }
	

	/* E.	Si el importe final con descuento suma más de $120  
	se debe sumar un 10% de ingresos brutos 
	e informar del impuesto con el siguiente mensaje:
	”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 	
    if (precioFinal > 120 ) 
    {
        iiBB = 10;
        impuesto = precioFinal * iiBB / 100;

        alert("Usted pagó $" + precioFinal + " y $" + impuesto + " de IIBB.");

        precioFinal = precioFinal + impuesto;      
    }

    document.getElementById('txtIdprecioDescuento').value = precioFinal.toFixed(2);

}


/*

PRIMER EJERCICIO


A.    Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.    

    if (cantidadLamparas>5)
    {
        descuento= 50;
    }
    else
    {
     B.   Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
    se hace un descuento del 40 % 
    y si es de otra marca el descuento es del 30%.

        if (cantidadLamparas==5)
        {
            descuento = 30;
     
            if (marca=="ArgentinaLuz")
            {
                descuento = 40;
            }
        }

        else
        {
        C.Si compra 4  lamparitas bajo consumo 
        marca "ArgentinaLuz" o “FelipeLamparas” 
        se hace un descuento del 25 % 
        y si es de otra marca el descuento es del 20%.

            if (cantidadLamparas == 4)
            {
                descuento = 20;

                if (marca == "ArgentinaLuz" || marca =="FelipeLamparas")
                {
                    descuento = 25;
                }
            }
            D.    Si compra 3  lamparitas bajo consumo 
                marca "ArgentinaLuz" el descuento es del 15%, 
                si es  “FelipeLamparas” se hace un descuento del 10 % 
                y si es de otra marca un 5%. 
            else
            {
                if (cantidadLamparas == 3) 
                {
                    descuento = 5;

                    if (marca == "ArgentinaLuz") 
                    {
                        descuento = 15;
                    }
                    else 
                    {
                        if (marca == "FelipeLamparas") 
                        {
                            descuento = 10;
                        }    
                    }
                }
            }

        }
    }


PRIMER EJERCICIO CON SWITCH


function CalcularPrecio () 

//txtIdCantidad
//Marca
//txtIdprecioDescuento
{
    var cantidadLamparas;
    var marca;
    var precioConDescuento;
    var valorUnidadOferta;
    var valorPorCantidad;
    var precioFinal;
    var descuento;
    var iiBB;
    var impuesto;
    var precioConiiBB;

    cantidadLamparas = parseInt(document.getElementById('txtIdCantidad').value);
    marca = document.getElementById('Marca').value;
    precioConDescuento = document.getElementById('txtIdprecioDescuento').value;
    valorUnidadOferta = 35;
    valorPorCantidad = valorUnidadOferta * cantidadLamparas;
    descuento = 0;


    if (cantidadLamparas>0) 
    {
        switch(cantidadLamparas) 
        {
            case 1:
            case 2:
            descuento = 0;
            break;
        D. Si compra 3  lamparitas bajo consumo 
            marca "ArgentinaLuz" el descuento es del 15%, 
            si es  “FelipeLamparas” se hace un descuento del 10 % 
            y si es de otra marca un 5%.  
            case 3:
            switch(marca)
            {
                case"ArgentinaLuz":
                descuento = 15;
                break;

                case"FelipeLamparas":
                descuento = 10;
                break;

                default:
                descuento = 5;
                break;
            }
            break;

        C.Si compra 4  lamparitas bajo consumo 
        marca "ArgentinaLuz" o “FelipeLamparas” 
        se hace un descuento del 25 % 
        y si es de otra marca el descuento es del 20%.
            case 4:
            switch(marca)
            {
                case"ArgentinaLuz":
                case"FelipeLamparas":
                descuento = 25;
                break;

                default:
                descuento = 20;
                break;
            }
            break;
        B.   Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
            se hace un descuento del 40 % 
            y si es de otra marca el descuento es del 30%. 
            case 5:
            switch(marca)
            {
                case"ArgentinaLuz":
                descuento = 40;
                break;

                default:
                descuento = 30;
                break;
            }
            break;
          A.Si compra 6 o más  lamparitas bajo consumo
           tiene un descuento del 50%. 
            default:
            descuento = 50;
            break;

        }
    
    precioFinal = valorPorCantidad - valorPorCantidad * descuento /100;

    }
    

     E.   Si el importe final con descuento suma más de $120  
    se debe sumar un 10% de ingresos brutos 
    e informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

    
    if (precioFinal > 120 ) 
    {
        iiBB = 10;
        impuesto = precioFinal * iiBB / 100;

        alert("Usted pagó $" + precioFinal + " y $" + impuesto + " de IIBB.");

        precioFinal = precioFinal + impuesto;      
    }

    document.getElementById('txtIdprecioDescuento').value = precioFinal.toFixed(2);

}
*/