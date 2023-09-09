// SIMULADOR INTERACTIVO PARA CALCULAR PAGOS EN CUOTAS

let nombre;

// Pedir al usuario que ingrese su nombre hasta que sea un texto válido
while (true) {
  nombre = prompt("Ingrese su nombre por favor");
  if (isNaN(nombre)) {
    break; // El nombre es válido, finaliza el bucle
  } else {
    alert("Por favor, ingrese un nombre válido.");
  }
}

console.log(nombre);

let precioProducto = parseInt(prompt(`${nombre} ingrese el precio del producto`));
console.log(precioProducto);

let cuotas;

// Pedir al usuario que ingrese la cantidad de cuotas hasta que sea 3, 6 o 9
while (true) {
  cuotas = parseInt(prompt(`Puede abonar el producto en 3, 6 o 9 cuotas exclusivamente. Ingrese la cantidad que desea solicitar:`));
  if (cuotas === 3 || cuotas === 6 || cuotas === 9) {
    break; // La cantidad de cuotas es válida, finaliza el bucle
  } else {
    alert("Por favor, ingrese una cantidad válida de cuotas (3, 6 o 9).");
  }
}

console.log(cuotas);

const interes = 10;


// crear una funcion para calcular cuanto interes se aplica para cada cantidad de cuotas y llamarla para mostrar resultados en pantalla

// Función para calcular el interés en base a la cantidad de cuotas
function sumarIntereses(precio, cuotas, interes) {
    const interesPorcentaje = interes * cuotas;
    const precioTotal = precio + (precio * interesPorcentaje) / 100;
    const cuotaMensual = precioTotal / cuotas;
    const interesPorCuota = (precio * interesPorcentaje) / (100 * cuotas);

  
    console.log(`${nombre} El precio total a pagar en ${cuotas} cuotas con ${interes}% de interés c/u es: $${precioTotal.toFixed(2)}`);
    console.log(`El monto de cada cuota mensual será de: $${cuotaMensual.toFixed(2)}`);
    console.log(`El interés por cuota es de: $${interesPorCuota.toFixed(2)}`);
  }
  
  // Llamar a la función para calcular el interés y mostrar los resultados
  sumarIntereses(precioProducto, cuotas, interes);




