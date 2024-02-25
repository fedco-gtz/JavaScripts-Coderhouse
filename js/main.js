// |-----08/02/2024------| 
// | Tercera pre entrega |
// |---------------------| 

let destino = ["Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Tucumán"
];

class Vuelo {
    // Origen del vuelo
    static origen = {
        "BUENOS AIRES": 1,
        SALTA: 2,
        "LA RIOJA": 3
    };
    // Destino del vuelo
    static destino = {
        CORDOBA: 500,
        MISIONES: 700,
        "MAR DEL PLATA": 600
    };
    // Porcentajes a cobrar por clase
    static porcentajesClase = {
        ECONOMICA: 0.15,
        PREMIUM: 0.30,
        BUSINESS: 0.45,
        PRIMERA: 0.60
    };
    constructor(datos) {
        // Armado de viaje
        this.origen = datos.origen;
        this.destino = datos.destino;
        this.clase = datos.clase;
        this.cantidadPasajeros = datos.cantidadPersonas;
        this.esIdaYVuelta = datos.tipoVuelo;
        // Costo del viaje
        this.precioDestino = this.calcularPrecioDestino();
        this.totalIda = this.calcularTotalIda();
        this.idaYVuelta = this.calcularIdaYVuelta();
        this.impuestosTotal = this.calcularImpuestos();
    };
    // Función que calcula el precio dependiendo del destino y origen ingresados por el usuario
    calcularPrecioDestino() {
        if (!(this.destino in Vuelo.destino)) {
            throw new Error("DESTINO NO VÁLIDO");
        };
        let precioBase = Vuelo.origen[this.origen];
        return precioBase * Vuelo.destino[this.destino];
    };
    // Función que agrega el porcentaje por la clase al precio calculado en calcularPrecioDestino()
    calcularTotalIda() {
        let porcentajeAumento = Vuelo.porcentajesClase[this.clase];
        let precioClase = this.precioDestino * (1 + porcentajeAumento);
        return precioClase * this.cantidadPasajeros;
    };
    // Función que agrega porcentaje de descuento si el viaje es "Ida y Vuelta" de la función calcularTotalIda()
    calcularIdaYVuelta() {
        if (this.esIdaYVuelta !== "IDA") {
            let descuentoVuelta = 0.1;
            let precioVuelta = this.totalIda - (this.totalIda * descuentoVuelta);
            return this.totalIda + precioVuelta;
        } else {
            return this.totalIda;
        };
    };
    // Función que calcula impuestos
    calcularImpuestos() {
        let tasaEmbarque = 0.50;
        const IVA = 0.21;
        return this.idaYVuelta * (tasaEmbarque + IVA);
    };

    
}

// Obtengo los datos almacenados en localStorage
const DATOSLOCALSTORAGE = localStorage.getItem('datosSeleccionados');
// Convierto la cadena JSON en un objeto JavaScript
const DATOSSELECCIONADOS = JSON.parse(DATOSLOCALSTORAGE);
// Creo una instancia de la clase Vuelo con los datos obtenidos
const VUELO = new Vuelo(DATOSSELECCIONADOS);

// Resumen de los pasajes a comprar
console.log(`|--------------------|\n| RESUMEN DE PASAJES |\n|--------------------|`);
console.log(`Origen: ${VUELO.origen}`);
console.log(`Destino: ${VUELO.destino}`);
console.log(`Clase: ${VUELO.clase}`);
console.log(`Cantidad de pasajeros: ${VUELO.cantidadPasajeros}`);
console.log(`|---------------|\n| TIPO DE VIAJE |\n|---------------|`);
if (VUELO.esIdaYVuelta !== "IDA") {
    console.log(`IDA Y VUELTA`);
    console.log(`Pasaje de ida: $${VUELO.totalIda}`);
    console.log(`Pasaje de vuelta: $${(VUELO.idaYVuelta - VUELO.totalIda)}`);
    console.log(`Precio total (No incluye impuestos y tasas): $${VUELO.idaYVuelta}`);
    console.log(`Impuestos y tasas: $${VUELO.impuestosTotal}`);
    console.log(`Precio total (No incluye intereses): $${VUELO.idaYVuelta + VUELO.impuestosTotal}`);
} else {
    console.log(`IDA`);
    console.log(`Precio total (No incluye impuestos y tasas): $${VUELO.totalIda}`);
    console.log(`Impuestos y tasas: $${VUELO.impuestosTotal}`);

    console.log(`Precio total (No incluye intereses): $${VUELO.totalIda + VUELO.impuestosTotal}`);
};

const PRECIOTOTALSININTERESES = VUELO.totalIda + VUELO.impuestosTotal;


























/*

// Función que solicita los datos de la tarjeta, cualquiera que sea el método de pago
solicitarInformacionTarjeta() {
    this.numeroTarjeta = prompt("Ingresa el número de tarjeta:");
    if ((this.emisorTarjeta === "Visa" || this.emisorTarjeta === "Mastercard") &&
        this.numeroTarjeta.length !== 16) {

        throw new Error("Número de tarjeta inválido. Debe tener 16 dígitos.");
    } else if (this.emisorTarjeta === "American Express" && this.numeroTarjeta.length !==
        15) {

        throw new Error("Número de tarjeta inválido. Debe tener 15 dígitos.");
    };
    this.vencimientoTarjeta = prompt("Ingresa la fecha de vencimiento (MM/YY):");
    this.codigoSeguridad = prompt("Ingresa el código de seguridad:");
    if ((this.emisorTarjeta === "Visa" || this.emisorTarjeta === "Mastercard") &&
        this.codigoSeguridad.length !== 3) {

        throw new Error("Código de seguridad inválido. Debe tener 3 dígitos.");
    } else if (this.emisorTarjeta === "American Express" && this.codigoSeguridad.length !==
        4) {

        throw new Error("Código de seguridad inválido. Debe tener 4 dígitos.");
    };
    this.nombreTitular = prompt("Ingresa el nombre del titular:");
};
// Función que detecta el emisor de la tarjeta
detectarEmisorTarjeta() {
    const numeroTarjetaPrefix = this.numeroTarjeta.slice(0, 1);
    switch (numeroTarjetaPrefix) {
        case "4":
            this.emisorTarjeta = "Visa";
            break;
        case "5":
            this.emisorTarjeta = "Mastercard";
            break;
        case "3":
            this.emisorTarjeta = "American Express";
            break;
        default:
            throw new Error("Emisor de tarjeta no reconocido.");
    };
};
// Función que solicita cantidad de cuotas, si el método de pago es tarjeta de crédito
solicitarCantidadCuotas() {
    this.cantidadCuotas = parseInt(prompt("Ingresa la cantidad de cuotas (3, 6, 9 o 12)"));
    switch (this.emisorTarjeta) {

        case "Visa":
            this.aplicarInteresVisa();
            break;
        case "Mastercard":
            this.aplicarInteresMastercard();
            break;
        case "American Express":
            this.aplicarInteresAmericanExpress();
            break;
        default:
            break;
    };
};
// Función que aplica los intereses si el emisor de la tarjeta es VISA
// |----------VISA------------|
// |3 o 6 cuotas - Sin interés|
// |9 cuotas - 40% interés |
// |12 cuotas - 110% interés |
// |--------------------------|
aplicarInteresVisa() {
    if (this.cantidadCuotas === 3 || this.cantidadCuotas === 6) {
        this.interesPorcentaje = 0;
    } else if (this.cantidadCuotas === 9) {
        this.interesPorcentaje = 40;
    } else if (this.cantidadCuotas === 12) {
        this.interesPorcentaje = 110;
    } else {
        throw new Error("Cantidad de cuotas no válida para Visa.");
    };
};
// Función que aplica los intereses si el emisor de la tarjeta es MASTERCARD
// |-----------MASTERCARD------------|
// |3, 6, 9 o 12 cuotas - 25% interés|
// |---------------------------------|
aplicarInteresMastercard() {
    this.interesPorcentaje = 25;
};
// Función que aplica los intereses si el emisor de la tarjeta es AMERICAN EXPRESS
// |----------AMERICAN EXPRESS------------|
// |3, 6 o 9 cuotas - 45% interés |
// |12 cuotas - Sin interés |
// |--------------------------------------|
aplicarInteresAmericanExpress() {
    if (this.cantidadCuotas === 3 || this.cantidadCuotas === 6 || this.cantidadCuotas === 9) {

        this.interesPorcentaje = 45;
    } else if (this.cantidadCuotas === 12) {
        this.interesPorcentaje = 0;
    } else {

        throw new Error("Cantidad de cuotas no válida para American Express.");
    };
};
// Función que calcula los intereses
calcularIntereses() {
    const intereses = (this.idaYVuelta + this.impuestosTotal) * (this.interesPorcentaje /
        100);
    const totalConIntereses = this.idaYVuelta + this.impuestosTotal + intereses;
    console.log(`Intereses aplicados: $${intereses}`);
    console.log(`Total a pagar con intereses: $${totalConIntereses}`);
};
// Función que procesa el pago
procesarPago() {
    console.log("Procesando el pago...");
    setTimeout(() => {
        const pagoAcreditado = Math.random() < 0.5;
        if (pagoAcreditado) {
            this.mostrarResumenCompra();
            this.calcularIntereses();
            console.log("¡Pago acreditado!");
        } else {
            console.log("Tarjeta sin fondos. El pago no pudo ser procesado.");
        };
    }, 3000);
};
// Función que muestra el resumen de la compra efectuada por el usuario
mostrarResumenCompra() {
    console.log(`|--------------------|\n| RESUMEN DE PASAJES |\n|--------------------|`);
    console.log(`Origen: ${this.origen}`);
    console.log(`Destino: ${this.destino}`);
    console.log(`Clase: ${this.clase}`);
    console.log(`Cantidad de pasajeros: ${this.cantidadPasajeros}`);
    console.log(`|---------------|\n| TIPO DE VIAJE |\n|---------------|`);
    if (this.esIdaYVuelta) {
        console.log(`IDA Y VUELTA`);
        console.log(`Pasaje de ida: $${this.totalIda}`);
        console.log(`Pasaje de vuelta: $${(this.idaYVuelta - this.totalIda)}`);
        console.log(`Precio total (No incluye impuestos y tasas): $${this.idaYVuelta}`);
        console.log(`Impuestos y tasas: $${this.impuestosTotal}`);
        console.log(`Precio total (No incluye intereses): $${this.idaYVuelta +

            this.impuestosTotal}`);
    } else {
        console.log(`IDA`);
        console.log(`Precio total (No incluye impuestos y tasas): $${this.idaYVuelta}`);
        console.log(`Impuestos y tasas: $${this.impuestosTotal}`);

        console.log(`Precio total (No incluye intereses): $${this.idaYVuelta +

            this.impuestosTotal}`);
    };
    console.log(`|--------------|\n| TIPO DE PAGO |\n|--------------|\n`);
    console.log(`${this.tipoPago}`);
    if (this.tipoPago === "TARJETA DEBITO") {
        console.log(`Número de tarjeta: ${this.numeroTarjeta}`);
        console.log(`Emisor de la tarjeta: ${this.emisorTarjeta}`);
        console.log(`Vencimiento: ${this.vencimientoTarjeta}`);
        console.log(`Código de seguridad: ${this.codigoSeguridad}`);
        console.log(`Titular: ${this.nombreTitular}`);
    } else if (this.tipoPago === "TARJETA CREDITO") {
        console.log(`Número de tarjeta: ${this.numeroTarjeta}`);
        console.log(`Emisor de la tarjeta: ${this.emisorTarjeta}`);
        console.log(`Vencimiento: ${this.vencimientoTarjeta}`);
        console.log(`Código de seguridad: ${this.codigoSeguridad}`);
        console.log(`Titular: ${this.nombreTitular}`);
        console.log(`Cantidad de cuotas seleccionadas: ${this.cantidadCuotas} \n Interés
    
    aplicado: ${this.interesPorcentaje}%`);
    };
};

// Función que solicita la informacion del vuelo al usuario
function solicitarInformacionVuelo() {
    let origen = prompt(`Ingresa el origen de tu viaje (Buenos Aires, Salta o La Rioja)`);
    let destino = prompt(`Ingresa el destino de tu viaje (Cordoba, Misiones o Mar del Plata)`);
    let clase = prompt(`Ingresa la clase en la que deseas viajar (Economica, Premium, Business,
    Primera)`);
    let cantidadPasajeros = parseInt(prompt(`Ingresa la cantidad de pasajeros`));
    let esIdaYVuelta = confirm(`¿Es un viaje de ida y vuelta?`);
    let tipoPago = prompt(`Ingresa el tipo de pago (Tarjeta Debito o Tarjeta Credito)`);
    return { origen, destino, clase, cantidadPasajeros, esIdaYVuelta, tipoPago };
};
// Validación de la información que se le solicita al usuario
try {
    const datosVuelo = solicitarInformacionVuelo();
    let vuelo = new Vuelo(...Object.values(datosVuelo));
    if (confirm("¿Deseas confirmar y procesar el pago?")) {
        vuelo.procesarPago();
    } else {
        console.log("Pago cancelado por el usuario.");
    }
} catch (error) {
    console.error(error.message);
};
*/