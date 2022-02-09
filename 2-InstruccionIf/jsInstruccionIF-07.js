/*
Sonia Luna DIV I
IF 07

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */


function mostrar()
{
	var edad;
	var estadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser Soltero.");
	} 

//txtIdEdad
//estadoCivil

}//FIN DE LA FUNCIÓN

/*
var mensaje;

if (edad>12)
{
	if (edad>12 && genero="Masculino") 
	{
	mensaje = "Ud es un adolescente";
	}
}
*/