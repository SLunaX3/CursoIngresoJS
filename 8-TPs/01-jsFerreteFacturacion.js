/*
Sonia Luna DIV I
TP E/S 01

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);


	alert("La Suma es " + suma);


}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres


function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	promedio = (parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)) / 3;


	alert("El Promedio es " + promedio);

}

function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var porcentaje;
	var PrecioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);


	porcentaje = suma * 0.21;
	precioFinal = suma + porcentaje;

	alert("El Precio Final + IVA es " + precioFinal);
}