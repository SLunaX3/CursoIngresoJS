/*
Sonia Luna
DIV I 
WHILE 07

 
Ejercicio While 07 V2 

Realizar el algoritmo que permita 
    el ingreso por prompt de
    1-alturas en centimetros    (validar entre 0 y 250) ,
    2-la edad (validar)
    3-temperatura(validar)
    4-el sexo(validar el sexo “f” o “m” o "nb")
    5-nota (validar)
    6-nombre
    de estudiantes de la UTN hasta que el usuario quiera, 


1ERA PARTE
    informar :
    a)Cuántas mujeres hay .
    b)Cuántos con fiebre y cuantos sin fiebre.
    c)el promedio de edad por sexo.
    
2da PARTE
    informar :
    d)el primer alumno aprobado
    e)el nombre y edad la máxima temperatura 
    f)la altura y nota  del no binario mas joven

3ra PARTE
    informar :
    g)el nombre de la mujer más alta de las que aprobó
    h)el porcentaje de  personas que desaprobaron sobre el total
    i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

*/
function mostrar()
{
	var alumno;	
	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;

	var respuesta;

	var contadorFiebre;
	var contadorSinFiebre;
	var contadorFemenino;
	var contadorMasculino;
	var contadorNoBinarios;
	var contadorEdad;
	var promedioEdadF;
	var promedioEdadM;
	var promedioEdadNB;
	var acumuladorF;
	var acumuladorM;
	var acumuladorNB;

	var banderaPrimerAlumno;
	var primerAlumnoAprobado;
	var temperaturaMax;
	var banderaTempMax;
	var nombreTempMax;
	var edadTempMax;
	var edadMinimaNB;
	var banderaEdadMinimaNB;
	var notaEdadMinimaNB;
	var alturaEdadMinimaNB;

	var alturaMaxF;
	var banderaAlturaMaxF;
	var nombreAlturaMaxF;
	var contadorDesaprobados;
	var contadorAlumnos;
	var contadorAlumnosAprobados;
	var porcentajeDesaprobados;
	var banderaPrimerHombreD;
	var nombrePrimerHombreD;
	
	alumno = "";
	respuesta = true;
	contadorFemenino = 0;
	contadorMasculino =0;
	contadorNoBinarios =0;
	contadorFiebre =0;
	contadorSinFiebre =0;
	contadorEdad =0;

	acumuladorF =0;
	acumuladorM =0;
	acumuladorNB =0;

	banderaPrimerAlumno =true;
	temperaturaMax =0;
	banderaTempMax = false;
	edadMinimaNB =0;
	banderaEdadMinimaNB = false;

	alturaMaxF =0;
	banderaAlturaMaxF = false;
	contadorDesaprobados =0;
	contadorAlumnosAprobados =0;
	contadorAlumnos =0;
	banderaPrimerHombreD = true;


	while (respuesta==true)
	{
    	alumno = prompt("Ingrese Nombre: ")
    	while (alumno == "")
	    {
	      alumno = prompt("ERROR. Ingrese un nombre: ");
	    }
	    contadorAlumnos++;

	    	altura = prompt("Ingrese altura (en centímetros):");
			altura = parseInt(altura);
		while(isNaN(altura)||altura<0 || altura>250)
		{
			altura = prompt("Error. Por favor, ingrese una altura entre 0 y 250 cm");
			altura = parseInt(altura);
		}

			edad = prompt("Ingrese edad:");
			edad = parseInt(edad);
		while(isNaN(edad)|| edad<17 || edad>80)
		{
			edad = prompt("Error. Por favor, ingrese una edad entre 18 y 80 años");
			edad = parseInt(edad);
		}

			temperatura = prompt("Ingrese temperatura:");
			temperatura = parseFloat(temperatura);
		while(isNaN(temperatura) || temperatura<30 || temperatura>52)
		{
			temperatura = prompt("Error. Por favor, ingrese una temperatura entre 30 y 52 °C");
			temperatura = parseFloat(temperatura);
		}

			sexo = prompt("Ingrese sexo:");
		while(sexo!='f' && sexo!= 'm' && sexo!="nb")
		{
			sexo = prompt("Error. Por favor, ingrese f (femenino), m (masculino) o nb (no binario)");
		}

			nota = prompt("Ingrese nota:");
			nota = parseInt(nota);

		while(isNaN(nota) || nota<0 || nota>10)
		{
			nota = prompt("Error. Por favor, ingrese una nota entre 0 y 10");
			nota = parseInt(nota);
		}
		

    	//b)Cuántos con fiebre y cuantos sin fiebre.
		if (temperatura>37) 
		{
			contadorFiebre++;
		}
		else
		{
			contadorSinFiebre++;
		}

		switch (sexo)// c)el promedio de edad por sexo.
		{
			case 'f'://a)Cuántas mujeres hay .
			contadorFemenino++;
			contadorEdad++;
			acumuladorF+=edad;
			break;
			case 'm':
			contadorMasculino++;
			contadorEdad++;
			acumuladorM+=edad;
			break;
			case "nb":
			contadorNoBinarios++;
			contadorEdad++;
			acumuladorNB+=edad;
			//f)la altura y nota  del no binario mas joven
			if (edad<edadMinimaNB||banderaEdadMinimaNB==false) 
			{
				alturaEdadMinimaNB = altura;
				notaEdadMinimaNB = nota;
				banderaEdadMinimaNB = true;
			}
			break;
		}

		
		if(nota>3)
		{
			if(banderaPrimerAlumno==true)//d)el primer alumno aprobado
			{	
				primerAlumnoAprobado = alumno;
				banderaPrimerAlumno = false;
			}
			//g)el nombre de la mujer más alta de las que aprobó
			if (sexo=="f"&&(altura>alturaMaxF||banderaAlturaMaxF==false)) 
			{
				nombreAlturaMaxF = alumno;
				banderaAlturaMaxF = true;
			}
			contadorAlumnosAprobados++;
		}
		//h)el porcentaje de  personas que desaprobaron sobre el total
		else
		{
//i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado. 
			if (sexo=="m" && altura<160 && banderaPrimerHombreD==true)
			{
				nombrePrimerHombreD = alumno;
				banderaPrimerHombreD = false;
			}
			contadorDesaprobados++;
		}

		//e)el nombre y edad la máxima temperatura 
		if (temperatura>temperaturaMax || banderaTempMax == false) 
		{
		temperaturaMax = temperatura;
		nombreTempMax = alumno;
		edadTempMax = edad;
		banderaTempMax = true;
		}

		

	respuesta = confirm("Desea hacer otro Ingreso de Datos?: ");
	}

	//c)el promedio de edad por sexo.
	promedioEdadF = acumuladorF/contadorFemenino;
	promedioEdadM = acumuladorM/contadorMasculino;
	promedioEdadNB = acumuladorNB/contadorNoBinarios;

	//h)el porcentaje de  personas que desaprobaron sobre el total
	porcentajeDesaprobados = contadorDesaprobados*100 /contadorAlumnos;

	//a)Cuántas mujeres hay .
	document.write("Cantidad de Mujeres : "+contadorFemenino+"<br>");
	//b)Cuántos con fiebre y cuantos sin fiebre.
	document.write("Cantidad de gente Con Fiebre : "+contadorFiebre+"<br>");
	document.write("Cantidad de gente Sin Fiebre : "+contadorSinFiebre+"<br>");
	//c)el promedio de edad por sexo.
	if (contadorFemenino>0)
	{
		document.write("Promedio de Edad Mujeres : "+promedioEdadF+"<br>");
		//g)el nombre de la mujer más alta de las que aprobó
		if(nota>3)
		{document.write("Nombre de la mujer más alta de los Aprobados: "+nombreAlturaMaxF+"<br>");}
	}
	if(contadorMasculino>0)
	{
		document.write("Promedio de Edad Hombres : "+promedioEdadM+"<br>");
		//i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
		if(altura<160 && nota<4)
		{document.write("Nombre primer hombre que mide menos de 160 cm y Desaprobado: "+nombrePrimerHombreD+"<br>");}
	}
	if(contadorNoBinarios>0)
	{
		document.write("Promedio de Edad No Binarios : "+promedioEdadNB+"<br>");
		//f)la altura y nota  del no binario mas joven
		document.write("Persona No Binaria más joven: altura;" + alturaEdadMinimaNB+"cm, nota: "+notaEdadMinimaNB+"<br>");
	}

	//d)el primer alumno aprobado
	if(contadorAlumnosAprobados>3)
	{
		document.write("Primer Alumno Aprobado: "+primerAlumnoAprobado+"<br>");
	}
	//e)el nombre y edad la máxima temperatura
	document.write("Persona con más temperatura: " + nombreTempMax+" . "+edadTempMax+"años."+"<br>");
	
	//h)el porcentaje de  personas que desaprobaron sobre el total
	document.write("Total Alumnos: "+contadorAlumnos+". Porcentaje de Desaprobados: "+porcentajeDesaprobados+"<br>");
	

}



/*While 07 V1
 Realizar el algoritmo que permita 
    el ingreso por prompt de:
    1-alturas en centimetros (validar entre 0 y 250) ,
    2-la edad (validar)
    3-temperatura(validar)
    4-el sexo(validar el sexo “f” o “m” o "nb")
    5-nota (validar)
    6-nombre de 5 estudiantes de la UTN, 
1ERA PARTE
    informar :
    a)El promedio de las alturas totales.
    b)Cantidad de personas de cada sexo.
    c)Cantidad de aprobados(más de 6)
    d)La cantidad de mujeres que su altura supere
     los 190 centímetros.

2da PARTE
    informar :
    e)Que sexo tiene mas alumnos
    f)el nombre de la persona más alta 
    g)la edad de la primera persona con fiebre (más de 37)

3ra PARTE
    informar :
    h)el nombre de la primer mujer aprobada
    i) la altura promedio de los aprobados
    j)el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado
    



function mostrar()
{
	
	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombre;
	var cantidadMaximaIteraciones;
	var acumuladorAlturas;
	var promedioAlturas;
	var contadorAlumnos;
	var contadorAlturas;
	var contadorMasculino;
	var contadorFemenino;
	var contadorNoBinarios;
	var contadorAlumnosAprobados;
	var contadorMujeresAltas;
	
	contadorAlumnos = 0;
	contadorAlturas = 0;
	contadorMasculino = 0;
	contadorFemenino = 0;
	contadorNoBinarios = 0;
	contadorAlumnosAprobados = 0;
	contadorMujeresAltas = 0;
	cantidadMaximaIteraciones = 5;
	acumuladorAlturas = 0;



    altura = parseInt(prompt("Ingrese altura (en centímetros):"));
    edad = parseInt(prompt("Ingrese Edad:"));
	
	while (contadorAlumnos<cantidadMaximaIteraciones)
	{
	    	altura = prompt("Ingrese altura (en centímetros):");
			altura = parseInt(altura);

		while(altura<0 || altura>250)
		{
			altura = prompt("Error. Por favor, ingrese una altura entre 0 y 250 cm");
			altura = parseInt(altura);

		}
		acumuladorAlturas+=altura; //acumuuladorAlturas=acumuladorAlturas+altura;


			edad = prompt("Ingrese edad:");
			edad = parseInt(edad);

		while(edad<17 || edad>80)
		{
			edad = prompt("Error. Por favor, ingrese una edad entre 18 y 80 años");
			edad = parseInt(edad);
		}

			temperatura = prompt("Ingrese temperatura:");
			temperatura = parseInt(temperatura);

		while(temperatura<30 || temperatura>52)
		{
			temperatura = prompt("Error. Por favor, ingrese una temperatura entre 30 y 52 °C");
			temperatura = parseFloat(temperatura);
		}

			sexo = prompt("Ingrese sexo:");

		while(sexo!='f' && sexo!= 'm' && sexo!="nb")
		{
			sexo = prompt("Error. Por favor, ingrese f (femenino), m (masculino) o nb (no binario)");
		}
		switch (sexo)
		{
			case 'f':
			contadorFemenino++; //comtadorFemenino=contadorFemenino +1
			break;
			case 'm':
			contadorMasculino++;
			break;
			case "bn":
			contadorNoBinarios++;
			break;
		}

		if (altura>190 && sexo=='f') //d.
		{
			contadorMujeresAltas++;
		}

			nota = prompt("Ingrese nota:");
			nota = parseInt(nota);

		while(nota<0 || nota>10)//(isNan(nota)==true && (nota<0 || nota>10))
		{
			nota = prompt("Error. Por favor, ingrese una nota entre 0 y 10");
			nota = parseInt(nota);
		}
		if(nota>5)
		{
			contadorAlumnosAprobados++;
		}

		nombre = prompt("Ingrese nombre:");
		nombre = parseInt(nombre);


		contadorAlumnos++;		
	}



	txtIdSuma.value = altura;
	txtIdPromedio.value = acumulador/contador;

}


documnet.write("") -> extra pag en blanco, con texto/msj

isNaN : is Not a Number } devuelve un dato booleano (true o false)

	inNan(numero)==true; [is not a number true -> NO es numero 
	inNan(numero)==false; [is not a number false -> es numero 

	var numero; [entre 0 y 10]
	numero=prompt("Ingrese un número:"); 
	numero=parseInt(numero);

	
	while (isNaN(numero)==true)
		{aca pediria de nuevo el numero}


//txtIdSuma
//txtIdPromedio
function mostrar()
{

	var numeroIngresado;
	var respuesta;
	var suma;
	var promedio;
	var contador;

	respuesta = "si";//i=0
	suma = 0;
	contador = 0;
	
	while (respuesta == "si")//i<5
	{
        numeroIngresado = prompt("Ingrese un número:");
        numeroIngresado = parseInt(numeroIngresado);

        suma = suma + numeroIngresado; //suma += numeroIngresado;
		contador ++;

		respuesta = prompt("Desea ingresar otro número? Ingrese "si" o "no" :");//i++
				//confirm(en vez de prompt) true en vez de "si"
	}

	promedio = suma/contador;

	txtIdSuma.value = suma;
	txtIdPromedio.value = promedio;

}
		

*/