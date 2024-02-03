/* ---------------------------------------------- */
/* | Primera pre entrega: Simulador interactivo |*/
/* ---------------------------------------------- */

/* console.log(`Bienvenido a VuelaSmart`);

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
}; */

/* -------------------------------------------------------- */
/* | Segunda pre entrega: Estructura, variables y objetos |*/
/* -------------------------------------------------------- */

console.log(`Bienvenido a VuelaSmart`);

class Vuelo {
    static porcentajesClase = {
        ECONOMICA: 0.15,
        PREMIUM: 0.30,
        BUSINESS: 0.45,
        PRIMERA: 0.60
    };

    static origen = {
        BUENOSAIRES: 1,
        SALTA: 2,
        "LA RIOJA": 3
    };

    static destino = {
        CORDOBA: 500,
        MISIONES: 700,
        "MAR DEL PLATA": 600
    };

    constructor(origen, destino, clase, cantidadPasajeros, esIdaYVuelta) {
        this.origen = origen.toUpperCase();
        this.destino = destino.toUpperCase();
        this.clase = clase.toUpperCase();
        this.cantidadPasajeros = cantidadPasajeros;
        this.esIdaYVuelta = esIdaYVuelta;
        this.precioDestino = this.calcularPrecioDestino();
        this.totalIda = this.calcularTotalIda();
        this.idaYVuelta = this.calcularIdaYVuelta();
        this.impuestosTotal = this.calcularImpuestos();
    };

    calcularPrecioDestino() {
        if (!(this.destino in Vuelo.destino)) {
            console.error(`DESTINO NO VÁLIDO`);
            return;
        };
        let precioBase = Vuelo.origen[this.origen];
        return precioBase * Vuelo.destino[this.destino];
    };

    calcularTotalIda() {
        if (!(this.clase in Vuelo.porcentajesClase)) {
            console.error(`CLASE NO VÁLIDA`);
            return;
        }
        let porcentajeAumento = Vuelo.porcentajesClase[this.clase];
        let precioClase = this.precioDestino * (1 + porcentajeAumento);
        return precioClase * this.cantidadPasajeros;
    };

    calcularIdaYVuelta() {
        if (this.esIdaYVuelta) {
            let descuentoVuelta = 0.1;
            let precioVuelta = this.totalIda - (this.totalIda * descuentoVuelta);
            return this.totalIda + precioVuelta;
        } else {
            return this.totalIda;
        };
    };

    calcularImpuestos() {
        let tasaEmbarque = 0.50;
        const IVA = 0.21;
        return this.idaYVuelta * (tasaEmbarque + IVA);
    };

    mostrarResumenCompra() {
        console.log(`Resumen de la compra:`);
        console.log(`Origen: ${this.origen}`);
        console.log(`Destino: ${this.destino}`);
        console.log(`Clase: ${this.clase}`);
        console.log(`Cantidad de pasajeros: ${this.cantidadPasajeros}`);

        if (this.esIdaYVuelta) {
            console.log(`Tipo de viaje: Ida y Vuelta`);
            console.log(`Pasaje de ida: $${this.totalIda}`);
            console.log(`Pasaje de vuelta: $${(this.idaYVuelta - this.totalIda)}`);
            console.log(`Precio total (No incluye impuestos y tasas) $${this.idaYVuelta}`);
            console.log(`Impuestos y tasas: $${this.impuestosTotal}`);
            console.log(`Precio total $${this.idaYVuelta + this.impuestosTotal}`);
        } else {
            console.log(`Tipo de viaje: Ida`);
            console.log(`Precio total (No incluye impuestos y tasas) $${this.idaYVuelta}`);
            console.log(`Impuestos y tasas: $${this.impuestosTotal}`);
            console.log(`Precio total $${this.idaYVuelta + this.impuestosTotal}`);
        };
    };
}

let origen = prompt(`Ingresa el origen de tu viaje (Buenos Aires, Salta o La Rioja)`);
let destino = prompt(`Ingresa el destino de tu viaje (Cordoba, Misiones o Mar del Plata)`);
let clase = prompt(`Ingresa la clase en la que deseas viajar`);
let cantidadPasajeros = parseInt(prompt(`Ingresa la cantidad de pasajeros`));
let esIdaYVuelta = confirm(`¿Es un viaje de ida y vuelta?`);

let vuelo = new Vuelo(origen, destino, clase, cantidadPasajeros, esIdaYVuelta);
vuelo.mostrarResumenCompra();
