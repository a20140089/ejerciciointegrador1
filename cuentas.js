var entrada = parseInt(prompt("Ingrese el monto de la entreda: "));
var segundo = parseInt(prompt("Ingrese el monto del segundo plato: "));
var postre = parseInt(prompt("Ingrese el monto del postre: "));

var montoparcial = entrada + segundo + postre;

var igv = montoparcial * 18/100;

var montototal = montoparcial + igv;

console.log("El monto de la entreda es: " + entrada);
console.log("El monto del segundo plato es: " + segundo);
console.log("El monto del postre es: " + postre);

console.log("El IGV asciende a: " + igv);

console.log("El monto total a pagar : " + montototal);