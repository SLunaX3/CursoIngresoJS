/*
Sonia Luna
DIV I
WHILE 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{
	var banderaPrimerIngreso;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	banderaPrimerIngreso = false;
	respuesta = true;

	while(respuesta==true)
	{
        numeroIngresado = prompt("Ingrese un número:");//4-5-2
        numeroIngresado = parseInt(numeroIngresado);

			if (numeroIngresado>numeroMaximo || banderaPrimerIngreso == false) 
			{
				numeroMaximo = numeroIngresado;//4-5
			}	
			if (numeroIngresado<numeroMinimo || banderaPrimerIngreso == false) 
			{
				numeroMinimo = numeroIngresado;//4-2
			}	

			banderaPrimerIngreso = true;

		respuesta = confirm("Desea ingresar otro número?");
				
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}

/*	while(respuesta==true)
	{
        numeroIngresado = prompt("Ingrese un número:");
        numeroIngresado = parseInt(numeroIngresado);

        if(banderaPrimerIngreso>=0)
        {
        numeroMaximo = numeroIngresado;
        numeroMinimo = numeroIngresado;
        banderaPrimerIngreso = true;
		}

		else
        {
			if (numeroIngresado>numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
			}	
			if (numeroIngresado>numeroMinimo) 
			{
				numeroMinimo = numeroIngresado;
			}	
		}

		respuesta = confirm("Desea ingresar otro número? si o no :");
				
	}
*/