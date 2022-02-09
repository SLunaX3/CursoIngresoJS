/*
Sonia Luna DIV I
IF 08

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
NO HACER NADA, pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'  */

function mostrar()
{
	var edad;
	var estadocivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadocivil = estadoCivil.value;

	if (edad>17 && estadocivil=="Soltero")
	{
		alert("Es Soltero y NO es Menor.");
	} 

//txtIdEdad
//estadoCivil

}//FIN DE LA FUNCIÓN