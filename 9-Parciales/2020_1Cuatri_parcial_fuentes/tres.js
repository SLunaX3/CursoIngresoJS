/*
Sonia Luna
DIV I
Parcial 03

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var temperaturaMax;
	var nombreTempMax;
	var banderaTempMax;
	var contadorViudos;
	var contadorHombreViudos;
	var contadorSoltero;
	var acumuladorSolteros;
	var contadorTerceraEdad;
	var promedio;
	var viudoSoltero;

	respuesta = true;

	banderaTempMax = false;

	contadorViudos = 0;
	contadorHombreViudos = 0;
	contadorSoltero = 0;
	acumuladorSolteros = 0;
	contadorTerceraEdad = 0;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre: ");

		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);	
	  	while(isNaN(edad)|| edad<1)
	  	{
		  	edad = prompt("Error. Ingrese una válida: ");
		  	edad = parseInt(edad);
	  	}

		sexo = prompt("Ingrese sexo (f o m): ");
		while(sexo!="f" && sexo!= "m")
		{
			sexo = prompt("Error. Por favor, ingrese f (femenino), m (masculino)");
		}

		estadoCivil = prompt("Ingrese Estado Civil (soltero, casado o viudo): ");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil = prompt("Error. Por favor, ingrese soltero, casado o viudo: ");
		}

		temperatura = prompt("Ingrese temperatura:");
		temperatura = parseFloat(temperatura);
		while(temperatura<30 || temperatura>52)
		{
			temperatura = prompt("Error. Por favor, ingrese una temperatura entre 30 y 52 °C");
			temperatura = parseFloat(temperatura);
		}

		switch(estadoCivil)
		{
			case "viudo":
			if(edad > 17)
			{
				contadorViudos++;
			}
			
			if(sexo == "m")
			{
				contadorHombreViudos++;
			}
			
			break;
			case "soltero":
			if(sexo == "m")
			{
				contadorSoltero++;
				acumuladorSolteros += edad;

			}
			break;
			
		}

		if(edad > 60 && temperatura > 38)
		{	
			contadorTerceraEdad++;
		}


	respuesta = confirm("Desea ingresar más?");

	}

	if (temperatura>temperaturaMax || banderaTempMax == false) 
	{
		temperaturaMax = temperatura;
		banderaTempMax = true;
		nombreTempMax = nombre;
		document.write("La persona con más temperatura es: " + nombreTempMax + "<br>");

	}

	document.write("Cantidad de viudos : " + contadorViudos + "<br>");
	document.write("Cantidad de personas de tercera edad con temperatura + 38: " + contadorTerceraEdad + "<br>");
	
	if(estadoCivil == "soltero")
	{
		promedio = acumuladorSolteros / contadorSoltero;
		document.write("Promedio entre hombres solteros :" + promedio + "<br>");

	}

	viudoSoltero = contadorSoltero + contadorHombreViudo;

	document.write("Cantidad de hombres solteros o viudos: " + viudoSoltero + "<br>");


}
