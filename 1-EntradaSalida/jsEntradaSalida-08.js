/*
Sonia Luna DIV I
E/S 08

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;

	resultado = parseInt(numeroUno) % parseInt(numeroDos);

	alert("El Resto es " + resultado);

}
//txtIdNumeroDividendo
//txtIdNumeroDivisor