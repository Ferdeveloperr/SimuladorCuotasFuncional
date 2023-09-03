


// SIMULADOR INTERACTIVO PARA CALCULAR PAGOS EN CUOTAS 

//nombre del cliente, el precio del producto y cantidad de cuotas 

let nombre = prompt("Ingrese su nombre por favor")
console.log(nombre)
let precioProducto = parseInt(prompt(`${nombre} ingrese el precio del producto`))
console.log(precioProducto)
let cuotas = parseInt(prompt(`puede abonar el producto en 3, 6 o 9 cuotas exclusivamente, ingrese la cantidad que desea solicitar`))
console.log(cuotas)
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




