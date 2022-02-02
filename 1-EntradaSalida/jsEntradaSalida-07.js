/*
Sonia Luna DIV I
E/S 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);


	alert("La Suma es " + suma);


}
//txtIdNumeroUno
//txtIdNumeroDos

function restar()
{
var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resultado = parseInt(numeroUno) - parseInt(numeroDos);


	alert("La Resta es " + resultado);	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resultado = parseInt(numeroUno) * parseInt(numeroDos);


	alert("La Multiplicación es " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resultado = parseInt(numeroUno) / parseInt(numeroDos);


	alert("La División es " + resultado);
}

