/* 
console.log("Bienvenido a VuelaSmart");

// Se definen las variables globales;
let destino = prompt("Ingresa el destino de tu viaje").toUpperCase();
let clase = prompt("Ingresa la clase en la que deseas viajar").toUpperCase();
let cantidadPasajeros = parseInt(prompt("Ingresa la cantidad de pasajeros"));

// Llamada a la función "calcularPrecio" para un viaje de ida;
let totalIda = calcularPrecio(destino, clase, cantidadPasajeros);

// Llamada a la función "idaYVuelta" para un viaje de ida y vuelta;
let idaYVuelta = precioIdaYVuelta(destino, clase, cantidadPasajeros);

// Preguntar si es ida y vuelta o solo ida;
let esIdaYVuelta = confirm("¿Es un viaje de ida y vuelta?");
if (esIdaYVuelta) {
    precioIdaYVuelta(destino, clase, cantidadPasajeros);
};

// Función para calcular el precio del pasaje de ida;
function calcularPrecio(destino, clase, cantidadPasajeros) {
    let precioBase;
    switch (destino) {
        case "CORDOBA":
            precioBase = 500;
            break;
        case "MISIONES":
            precioBase = 700;
            break;
        case "MAR DEL PLATA":
            precioBase = 600;
            break;
        default:
            console.error("DESTINO NO VALIDO");
            return;
    };

    let precioClase;
    switch (clase) {
        case "ECONOMICA":
            precioClase = 50;
            break;
        case "PREMIUM":
            precioClase = 150;
            break;
        case "BUSINESS":
            precioClase = 200;
            break;
        case "PRIMERA":
            precioClase = 400;
            break;
        default:
            console.error("CLASE NO VALIDA");
            return;
    };

    return (precioBase + precioClase) * cantidadPasajeros;
};

// Función para calcular el precio del pasaje de ida y vuelta;
function precioIdaYVuelta(destino, clase, cantidadPasajeros) {
    // Calculo del precio de ida;
    let precioIda = calcularPrecio(destino, clase, cantidadPasajeros);

    // Calculo del precio de ida y vuelta más un 10% de descuento;
    let descuentoVuelta = 0.1;
    let precioVuelta = precioIda - (precioIda * descuentoVuelta);

    // Se suma el precio de ida y vuelta;
    return precioIda + precioVuelta;
};

// Resumen de compra;
if (esIdaYVuelta) {
    console.log("Resumen de la compra:");
    console.log("Destino: " + destino);
    console.log("Clase: " + clase);
    console.log("Cantidad de pasajeros: " + cantidadPasajeros);
    console.log("Tipo de viaje: Ida y Vuelta");
    console.log("Pasaje de ida: $" + totalIda);
    console.log("Pasaje de vuelta: $" + (idaYVuelta - totalIda));
    console.log("Total a pagar por ida y vuelta: $" + idaYVuelta);
} else {
    console.log("Resumen de la compra:");
    console.log("Destino: " + destino);
    console.log("Clase: " + clase);
    console.log("Cantidad de pasajeros: " + cantidadPasajeros);
    console.log("Tipo de viaje: Ida");
    console.log("Total a pagar $" + totalIda);
};
*/


console.log(`Bienvenido a VuelaSmart`);

// Se definen las variables globales;
let destino = prompt(`Ingresa el destino de tu viaje`).toUpperCase();
let clase = prompt(`Ingresa la clase en la que deseas viajar`).toUpperCase();
let cantidadPasajeros = parseInt(prompt(`Ingresa la cantidad de pasajeros`));

// Llamada a la función "calcularPrecio" para un viaje de ida;
let totalIda = calcularPrecio(destino, clase, cantidadPasajeros);

// Llamada a la función "idaYVuelta" para un viaje de ida y vuelta;
let esIdaYVuelta = confirm(`¿Es un viaje de ida y vuelta?`);
let idaYVuelta;

// Si es ida y vuelta, calcular precio y mostrar resumen
if (esIdaYVuelta) {
    idaYVuelta = precioIdaYVuelta(totalIda);
} else {
    idaYVuelta = totalIda;
};

// Resumen de compra;
console.log(`Resumen de la compra:`);
console.log(`Destino: ${destino}`);
console.log(`Clase: ${clase}`);
console.log(`Cantidad de pasajeros: ${cantidadPasajeros}`);

// Mostrar tipo de viaje y costos
if (esIdaYVuelta) {
    console.log(`Tipo de viaje: Ida y Vuelta`);
    console.log(`Pasaje de ida: $${totalIda}`);
    console.log(`Pasaje de vuelta: $${(idaYVuelta - totalIda)}`);
    console.log(`Total a pagar por ida y vuelta: $${idaYVuelta}`);
} else {
    console.log(`Tipo de viaje: Ida`); 
    console.log(`Total a pagar $${idaYVuelta}`);
};

// Función para calcular el precio del pasaje de ida;
function calcularPrecio(destino, clase, cantidadPasajeros) {
    let precioBase;
    switch (destino) {
        case `CORDOBA`:
            precioBase = 500;
            break;
        case `MISIONES`:
            precioBase = 700;
            break;
        case `MAR DEL PLATA`:
            precioBase = 600;
            break;
        default:
            console.error(`DESTINO NO VALIDO`);
            return;
    };

    let precioClase;
    switch (clase) {
        case `ECONOMICA`:
            precioClase = 50;
            break;
        case `PREMIUM`:
            precioClase = 150;
            break;
        case `BUSINESS`:
            precioClase = 200;
            break;
        case `PRIMERA`:
            precioClase = 400;
            break;
        default:
            console.error(`CLASE NO VALIDA`);
            return;
    };

    return (precioBase + precioClase) * cantidadPasajeros;
};

// Función para calcular el precio del pasaje de ida y vuelta;
function precioIdaYVuelta(precioIda) {
    // Calculo del precio de ida y vuelta más un 10% de descuento;
    let descuentoVuelta = 0.1;
    let precioVuelta = precioIda - (precioIda * descuentoVuelta);

    // Se suma el precio de ida y vuelta;
    return precioIda + precioVuelta;
};