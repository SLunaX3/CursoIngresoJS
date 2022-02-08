/*
Sonia Luna DIV I
IF 05

Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.*/


function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);


	if (!(edad<12) && !(edad>18))
	{
		alert("Ud es un Adolescente");
	}


//txtIdEdad

}//FIN DE LA FUNCIÓN



/*
	if (edad>12)
		if (edad<18)
	{
		alert("Ud es un Adolescente");
	}


var mensaje;

if (edad>12)
{
	if (edad>12 && genero="Masculino") 
	{
	mensaje = "Ud es un adolescente";
	}
}


si (es niño)
{
mostrar ques es niño
}
sino 
	si (es adolescente)
	{
	mostrar que es adol
	}
	sino (adulto)
	{
	mostrar que es adulto
	}
}
*/
