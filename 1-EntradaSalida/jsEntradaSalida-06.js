/*
Sonia Luna DIV I
E/S 06

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);


	alert("La suma es " + suma);
}

//txtIdNumeroUno
//txtIdNumeroDos