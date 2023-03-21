function calcular() {

    // Obtener los valores del subtotal y porcentajes de impuesto
	var subtotal = parseFloat(document.getElementById("subtotal").value);
	var porcentaje = parseFloat(document.getElementById("porcentaje").value);

    // Calcular el impuesto y el total
	var impuesto = subtotal * porcentaje / 100;
	var total = subtotal + impuesto;

    // Mostrar el total en la caja de texto 
	document.getElementById("resultado").value = total.toFixed(2);
}