/*
SoniaLuna
DIV I
PRACTICA Parcial 09 2018

Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo. 
*/

function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var contadorTemperaturasPares;
	var pesoMax;
	var marcaMasPesado;
	var banderaMasPesado;
	var contadorProdFrios;
	var contadorPeso;
	var acumuladorPeso;
	var promedioPeso;
	var pesoMin;
	var banderaMenosPesado;

	respuesta=true;
	marca="";
	contadorTemperaturasPares=0;
	banderaMasPesado=false;
	contadorProdFrios=0;
	contadorPeso=0;
	acumuladorPeso=0;
	banderaMenosPesado=false;

	while(respuesta==true)
	{
		marca=prompt("Ingrese marca");
		while(marca=="")
		{
			marca=prompt("Error. Ingrese una marca")
		}

		peso=prompt("Ingrese peso");
		peso=parseFloat(peso);
		while(isNaN(peso)||peso<1||peso>100)
		{
			peso=prompt("Error. Ingrese peso entre 1 y 100");
			peso=parseFloat(peso);
		}

		temperatura=prompt("Ingrese temperatura de almacenamiento");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||(temperatura<-30||temperatura>30))
		{
			temperatura=prompt("Error. Ingrese temperatura entre -30 y 30");
			temperatura=parseInt(temperatura);
		}

		if(temperatura%2==0)//a) La cantidad de temperaturas pares.
		{
		  	contadorTemperaturasPares++;
		}
		//b) La marca del producto más pesado //f) El peso máximo y el mínimo. 
		if (peso>pesoMax || banderaMasPesado == false) 
		{
			pesoMax = peso;
			marcaMasPesado = marca;
			banderaMasPesado = true;
		}
		if (peso<pesoMin || banderaMenosPesado == false) 
		{
			pesoMin=peso;
			banderaMenosPesado=true;
		}
		
		//c) La cantidad de productos que se conservan a menos de 0 grados.
		if (temperatura<0) 
		{
			contadorProdFrios++;
		}

		//d) El promedio del peso de todos los productos.
		contadorPeso++;
		acumuladorPeso+=peso;

	respuesta=confirm("Desea hacer otro ingreso de datos?");		
	}

if (contadorPeso>1) //d) El promedio del peso de todos los productos.
{
	promedioPeso=acumuladorPeso/contadorPeso;
	document.write("Promedio del peso de todos los productos: "+ promedioPeso +"<br>");
}
	document.write("Cantidad de temperaturas pares: "+ contadorTemperaturasPares +"<br>");
	document.write("Marca del producto más pesado: "+ marcaMasPesado +"<br>");
	document.write("Cantidad de productos que se conservan a menos de 0 grados: "+ contadorProdFrios +"<br>");
	document.write("Peso Máximo: "+ pesoMax +"<br>");
	document.write("Peso Mínimo: "+ pesoMin +"<br>");	
}
/*
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo. 
*/