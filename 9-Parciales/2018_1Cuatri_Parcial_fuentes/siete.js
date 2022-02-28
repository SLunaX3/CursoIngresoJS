/*
Sonia Luna
DIV I
PRACTICA Parcial 07 2018

Realizar el algoritmo que permita el ingreso por prompt de 
las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. 
*/

function mostrar()
{
	var nota;
	var sexo;
	var control;
	var acumuladorNotas;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var banderaNotaMasBaja;
	var contadorMAprobados;
	var mensaje;

	control=0;
	acumuladorNotas=0;
	banderaNotaMasBaja=false;
	contadorMAprobados=0;

	while(control<5)
	{
		nota=prompt("Ingrese nota: ");
		nota=parseInt(nota);
		while(isNaN(nota)||(nota<0&&nota>10))
		{
			nota=prompt("Error. Ingrese una nota válida: ");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese sexo (f o m): ");
		while(sexo!='f'&&sexo!='m')
		{
			sexo=prompt("Error. Ingrese sexo (f o m): ");
		}

		acumuladorNotas+=nota;

		//b) La nota más baja y el sexo de esa persona.
		if (nota<notaMasBaja || banderaNotaMasBaja == false) 
		{
			notaMasBaja = nota;
			sexoNotaMasBaja=sexo;
			banderaNotaMasBaja = true;
		}

//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		if (nota>5&&sexo=="m") 
		{
			contadorMAprobados++;
		}
		
	control++;
	}

	//a) El promedio de las notas totales.
	promedio=acumuladorNotas/5;

	mensaje="Promedio de las notas totales: "+promedio+"\n";
	mensaje+="La nota más baja: "+notaMasBaja+" de sexo "+sexoNotaMasBaja+"\n";
	mensaje+="La cantidad de varones con nota mayor o igual a 6: "+contadorMAprobados+"\n";

	alert(mensaje);
}
