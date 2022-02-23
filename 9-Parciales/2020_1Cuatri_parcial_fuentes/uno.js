/*
Sonia Luna
DIV I


Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var control;
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;

	var alcoholBarato;//a)
	var cantidadAlcohol;
	var fabricanteAlcoholBarato;
	var banderaAlcohol;

	var contadorJabon;//b)
	var contadorAlcohol;
	var contadorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var promedioCompra;
	var tipoConMasCantidad;

	control =0;
	banderaAlcohol = false;

	contadorJabon=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;

	while(control<5)
	{
		tipo = prompt ("Ingrese el tipo de producto: barbijo, jabón o alcohol");
	
		while(tipo!="barbijo" && tipo!= "jabón" && tipo!="alcohol")
		{
			tipo=prompt("Error. Intente nuevamente.");
		}

		precio=prompt("Ingrese el precio (entre 100 y 300) ");
		precio=parseInt(precio);

		while(isNaN(precio)|| precio<100 || precio>300)
		{
			precio=prompt("Error. Ingrese el precio (entre 100 y 300).");
			precio=parseInt(precio);
		}

		cantidad=prompt("Ingrese la cantidad.")
		cantidad=parseInt(cantidad);

		while(isNaN(cantidad) || cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Error. Ingrese la cantidad.");
			cantidad=parseInt(cantidad);
		}

		marca= prompt("Ingrese la marca.");

		fabricante=prompt("Ingrese el fabricante.");

		if (tipo=="alcohol") 
		{
			acumuladorAlcohol+=cantidad;
			contadorAlcohol++;

			if (precio<alcoholBarato || banderaAlcohol==false) 
			{
				alcoholBarato=precio;
				cantidadAlcohol=cantidad;
				fabricanteAlcoholBarato=fabricante;
				banderaAlcohol=true;
			}

		}

		else

		{	
			if (tipo == "jabón") 
			{
				acumuladorJabon+=cantidad;
				contadorJabon++;
			}

			else
			{
				acumuladorBarbijo+=cantidad;
				contadorBarbijo++;
			}
		}

		control++;
	}

	if (acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo) 
	{
		promedioCompra = acumuladorAlcohol/contadorAlcohol;
		tipoConMasCantidad = "alcohol";
	}
	else
	{
		if (acumuladorJabon>acumuladorBarbijo) 
		{
		promedioCompra = acumuladorJabon/contadorJabon;
		tipoConMasCantidad = "jabón";
		}
		else
		{
			promedioCompra = acumuladorBarbijo/contadorBarbijo;
			tipoConMasCantidad = "barbijo";
		}
	}

	if (contadorAlcohol>0) 
	{
	document.write("el alcohol más barato es :"+ alcoholBarato +"<br>");
	document.write("la cantidad de unidades es :"+ cantidadAlcohol +"<br>");
	document.write("el fabricante es :"+ fabricanteAlcoholBarato +"<br>");
	}
	document.write("el tipo con más cantidad es: "+tipoConMasCantidad+ "<br>");
	document.write("el promedio es: "+promedioCompra+ "<br>");
	document.write("el cantidad de jabones es: "+acumuladorJabon+ "<br>");
}
