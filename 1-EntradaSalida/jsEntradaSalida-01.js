/*
Luna Sonia DIV I 
E/S 01
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"


*/


function mostrar()

{

	var diametroMayor;
	var diametroMenor;
	var cantidad;
	var catMenor;
	var catMayor;
	var ladosMayores;
	var ladosMenores;
	var perimetroCometa;
	var areaCometa;
	var colaCometa;
	var consumoVarillasUnidad;
	var consumoPapelUnidad;
	var consumoFinalVarillas;
	var consumoFinalPapel;
	var mensaje;

	diametroMayor = parseFloat(prompt("Ingrese Diametro Mayor en cm"));
	diametroMenor = parseFloat(prompt("ingrese Diametro Menor en cm"));
	
	cantidad = parseInt(prompt("¿Cuántas cometas desea?"));
	
	catMenor = parseFloat(diametroMenor*0.5); 
	catMayor = parseFloat(diametroMayor-catMenor);
	
	ladosMenores = Math.sqrt(Math.pow(catMenor,2)+ Math.pow(catMenor,2));
	ladosMayores = Math.sqrt(Math.pow(catMayor,2) + Math.pow(catMenor,2));

	perimetroCometa = (ladosMayores+ladosMenores)*2;
	areaCometa = (ladosMayores*ladosMenores)/2;
	colaCometa = areaCometa*0.1 ;

	consumoVarillasUnidad = diametroMayor+diametroMenor+perimetroCometa;
	consumoPapelUnidad = areaCometa+colaCometa;
	
	consumoFinalVarillas = (consumoVarillasUnidad*cantidad)/100;
	consumoFinalPapel = (consumoPapelUnidad*cantidad)/100;

	mensaje="Para la cantidad de "+cantidad+" cometas, necesitará: ";
	mensaje+=consumoFinalVarillas.toFixed(2)+" mt de varillas y ";
	mensaje+=consumoFinalPapel.toFixed(2)+" m² de papel entre cuerpo y cola de cometa.";
	mensaje += " Si quiere realizarlo de dos colores, necesitará: ";
	mensaje += consumoFinalPapel.toFixed(2)/2+" m² de cada color.";

	alert(mensaje);
}

