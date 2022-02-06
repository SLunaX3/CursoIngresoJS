/*
Luna Sonia DIV I 
E/S 01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
1 Tp Sabados
Se piden tres nombre de producto, y los precios de cada  producto ingresado,
sacar el precio bruto (la suma de los tres sin impuestos), el promedio de los
precios y el precio final total más iva (21%), pedir un porcentaje de descuento 
y aplicarlo al precio final, mostrar todos 
los datos calculados e ingresados por alert. (solo un alert en el código)
*/


function mostrar()
{
	var productoUno;
	var productoDos;
	var productoTres;
	var precioPUno;
	var precioPDos;
	var precioPTres;
	var precioBruto;
	var promedio;
	var iva;
	var precioTotal;
	var descuento;
	var precioFinal;
	var mensaje;

	productoUno = prompt ("Primer Producto");
	precioPUno = parseFloat(prompt ("Precio Primer Producto: " + productoUno));
	productoDos = prompt ("Segundo Producto");
	precioPDos = parseFloat(prompt ("Precio Segundo Producto: " + productoDos));
	productoTres = prompt ("Tercer Producto");
	precioPTres = parseFloat(prompt ("Precio Tercer Producto: " + productoTres));

	precioBruto = precioPUno + precioPDos + precioPTres;

	promedio = precioBruto / 3;

	iva = promedio * 0.21;

	precioTotal = precioBruto + iva;

	descuento = parseInt(prompt ("Ingrese Porcentaje de Descuento"));

	precioFinal = precioTotal - (precioTotal * descuento / 100);

	mensaje = "Su Precio Bruto es: $" + precioBruto.toFixed (2);
	mensaje += ". Su Promedio de Precios: $" + promedio.toFixed (2);
	mensaje += ". Su Precio Total + IVA: $" + precioTotal.toFixed(2);
	mensaje += ". Precio Final con Descuento: $" + precioFinal.toFixed (2) + ".";


	alert(mensaje);
}

