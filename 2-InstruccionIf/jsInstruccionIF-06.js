/*
Sonia Luna DIV I
IF 06

Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/


function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	
	if (edad<13)
	{
		alert("Ud es un Niño");
	}
	else
	{
		if (edad<18) 
//(edad>12 && edad<18) -> es redundante "edad>12" por la condición anterior
		{
			alert("Ud es un Adolescente");
		}

		else 
		{
			//if(edad>17) -> es redundante
			{
				alert("Ud es una persona Mayor de Edad");
			}
		}
	}

//txtIdEdad

}//FIN DE LA FUNCIÓN


/*si (es niño)
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