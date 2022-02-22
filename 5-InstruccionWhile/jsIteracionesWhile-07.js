/*
Sonia Luna
DIV I 
WHILE 07

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
 
 While 07 V1
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
    

*/

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

/*
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