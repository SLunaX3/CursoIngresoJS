/*
Sonia Luna 
DIV I
TP 04

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
 	var precioDescuento;
 	var ofertaLamparas;
 	var marca;
 	var descuentoA;
 	var descuentoB;
 	var descuentoBelse;
 	var descuentoC;
 	var descuentoCelse;
 	var descuentoDA;
 	var descuentoDF;
 	var descuentoDelse;
 	var impuestoE;


 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);
 	precioDescuento = document.getElementById('txtIdprecioDescuento').value;
 	ofertaLamparas = 35;
 	marca = document.getElementById('Marca').value;

 	descuentoA = (ofertaLamparas* 0.5)*cantidadLamparas;
 	descuentoB = (ofertaLamparas* 0.4)*cantidadLamparas;
 	descuentoBelse = (ofertaLamparas* 0.3)*cantidadLamparas;
 	descuentoC = (ofertaLamparas* 0.25)*cantidadLamparas;
 	descuentoCelse = (ofertaLamparas* 0.2)*cantidadLamparas;
 	descuentoDA = (ofertaLamparas* 0.15)*cantidadLamparas;
 	descuentoDF = (ofertaLamparas* 0.1)*cantidadLamparas;
 	descuentoDelse = (ofertaLamparas* 0.05)*cantidadLamparas;
 	impuestoE = ((document.getElementById('txtIdprecioDescuento').value)*0.1);
 	


/*A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.*/	

 	if (cantidadLamparas>5)
 	{
 		document.getElementById('txtIdprecioDescuento').value=(descuentoA);
 	}
 	else
  	{
       document.getElementById('txtIdprecioDescuento').value= (ofertaLamparas);
    }

/*B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.*/

    if (cantidadLamparas==5 && marca=="ArgentinaLuz")
 	{
 		document.getElementById('txtIdprecioDescuento').value=(descuentoB);
 	}
 	else
 	{
 		if (cantidadLamparas==5)
  		{
      	document.getElementById('txtIdprecioDescuento').value=(descuentoBelse);
    	}
    }

/*
C.Si compra 4  lamparitas bajo consumo 
marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.*/

	if (cantidadLamparas==4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 	{
 		document.getElementById('txtIdprecioDescuento').value=(descuentoC);
 	}
 	else
  	{
 		if (cantidadLamparas==4)
  		{
      	document.getElementById('txtIdprecioDescuento').value=(descuentoCelse);
    	}
    }
/*
D.	Si compra 3  lamparitas bajo consumo 
marca "ArgentinaLuz" el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % 
y si es de otra marca un 5%. */

	if (cantidadLamparas==3 && marca=="ArgentinaLuz")
 	{
 		document.getElementById('txtIdprecioDescuento').value=(descuentoDA);
 	}
 	else
  	{
 		if (cantidadLamparas==3 && marca=="FelipeLamparas")
  		{
      	document.getElementById('txtIdprecioDescuento').value=(descuentoDF);
    	}
    	else 
		{
			if (cantidadLamparas==3)
			{
			document.getElementById('txtIdprecioDescuento').value=(descuentoDelse);
			}
		}
    }

/*
E.	Si el importe final con descuento suma más de $120  
se debe sumar un 10% de ingresos brutos 
e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

	if (document.getElementById('txtIdprecioDescuento').value>=120)
 	{
 		document.getElementById('txtIdprecioDescuento').value+(impuestoE);
 		alert("Usted pagó $"+ (impuestoE) + " de IIBB.");
 		//Ud PAGARÁ X de IIBB.
 	}

}
