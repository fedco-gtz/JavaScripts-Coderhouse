// |-----08/02/2024------| 
// | Tercera pre entrega |
// |---------------------| 

let destino = ["Buenos Aires | EPA | Aeropuerto El Palomar", "Buenos Aires | EZE | Aeropuerto Int. Ezeiza", "Buenos Aires | FDO | Aeropuerto Int. de San Fernando", "Buenos Aires | AEP | Aeroparque Jorge Newbery", "Catamarca | CTC | Aeropuerto Gral. Felipe Varela", "Chaco | RES | Aeropuerto Int. de Resistencia", "Chubut | CRD | Aeropuerto Int. Gral. Enrique Mosconi", "Chubut | EQS | Aeropuerto de Esquel, Brig. Gral. Antonio Parodi", "Chubut | PMY | Aeropuerto El Tehuelche", "Córdoba | COR | Aeropuerto Int. Ing. Aer. Ambrosio Taravella", "Córdoba | RCU | Aeropuerto Área de Material de Río Cuarto", "Entre Ríos | PRA | Aeropuerto Gral. Urquiza", "Formosa | FMA | Aeropuerto Int. de Formosa", "Jujuy | JUJ | Aeropuerto Int. Gdor. Horacio Guzmán", "La Pampa | GPO | Aeropuerto de Gral. Pico", "La Pampa | RSA | Aeropuerto de Santa Rosa", "La Rioja | IRJ | Aeropuerto Cap. Vicente Almandos Almonacide", "Mar del Plata | MDQ | Aeropuerto Int. Astor Piazzolla", "Mendoza | AFA | Aeropuerto Int. Suboficial Ayudante Santiago Germano", "Mendoza | LGS | Aeropuerto Int. de Malargüe", "Mendoza | MDZ | Aeropuerto Int. El Plumerillo", "Misiones | IGR | Aeropuerto Int. de las Cataratas del Iguazú", "Misiones | PSS | Aeropuerto Libertador Gral. José de San Martín", "Río Negro | BRC | Aeropuerto Int. Tte. Luis Candelaria", "Río Negro | VDM | Aeropuerto Int. Gdor. Edgardo Castello", "Salta | SLA | Aeropuerto Int. Martín Miguel de Güemes", "San Juan | UAQ | Aeropuerto de San Juan", "San Luis | LUQ | Aeropuerto Brig. Mayor Cesar Raúl Ojeda", "San Luis | VME | Aeropuerto de Villa Reynolds", "Santa Cruz | RGL | Aeropuerto Int. Piloto Civil Norberto Fernández", "Santa Fé | RCQ | Aeropuerto Tte. Daniel Jukic", "Santiago del Estero | RHD | Aeropuerto Int. Termas de Rio Hondo", "Santiago del Estero | SDE | Aeropuerto 'Madre de Ciudades'", "Tierra del Fuego | RGA | Aeropuerto Int. Gdor. Ramon Trejo Noel", "Tucuman | TUC | Aeropuerto Int. de Tucumán Benjamín Matienzo",];

class Vuelo {
    // Porcentajes a cobrar por clase
    static porcentajesClase = {
        ECONOMICA: 0.15,
        PREMIUM: 0.3,
        BUSINESS: 0.45,
        PRIMERA: 0.6,
    };
    constructor(datos) {
        // Desestructuración de parámetros
        const { origen, destino, clase, cantidadPersonas, tipoVuelo } = datos;
        // Armado de viaje
        this.origen = origen;
        this.destino = destino;
        this.clase = clase;
        this.cantidadPasajeros = cantidadPersonas;
        this.esIdaYVuelta = tipoVuelo;
        // Costo del viaje
        this.precioBase = this.calcularPrecioBase();
        this.precioClase = this.calcularPrecioClase();
        this.precioDestino = this.calcularPrecioDestino();
        this.precioIda = this.calcularPrecioIda();
        this.impuestosTotal = this.calcularImpuestos();
        this.precioTotalPasaje = this.precioTotalPasaje;
    };
    // Función que calcula el precio base del pasaje
    calcularPrecioBase() {
        // Uso de operador Nullish Coalescing
        let longitudOrigen = this.origen?.length ?? 0;
        let longitudDestino = this.destino?.length ?? 0;
        return longitudOrigen * longitudDestino;
    };
    // Función que calcula el precio por la clase del vuelo
    calcularPrecioClase() {
        if (!(this.clase in Vuelo.porcentajesClase)) {
            console.log(`La clase "${this.clase}" no está definida.`);
            return 0;
        }
        let precioClase = this.calcularPrecioBase() * Vuelo.porcentajesClase[this.clase];
        return precioClase;
    };
    // Función que calcula el precio del pasaje de IDA
    calcularPrecioDestino() {
        let precioDestino = (this.calcularPrecioBase() + this.calcularPrecioClase()) * 47;
        return precioDestino;
    };
    // Función que calcula el precio segun tipo de vuelo
    calcularPrecioIda() {
        // Uso de operador ternario
        let precioIdaYVuelta = (this.esIdaYVuelta === "IDA_VUELTA") ? (this.calcularPrecioDestino() * 0.9 + this.calcularPrecioDestino()) : this.calcularPrecioDestino();
        return precioIdaYVuelta;
    };
    // Función que calcula los impuestos a cobrar
    calcularImpuestos() {
        let tasas = 0.5;
        let iva = 0.21;
        let impuestoTotal = tasas + iva;
        // Uso de operador lógico AND
        let impuestos = (this.esIdaYVuelta === "IDA_VUELTA" && this.calcularPrecioIda()) ? this.calcularPrecioIda() * impuestoTotal : this.calcularPrecioDestino() * impuestoTotal;
        return impuestos;
    };
    // Función que calcula el precio total del pasaje
    precioTotalPasaje() {
        // Uso de operador lógico OR
        let precioTotal = (this.calcularPrecioIda() + this.calcularImpuestos()) * this.cantidadPasajeros || 0;
        return precioTotal;
    };
};
// Obtengo los datos almacenados en localStorage
const DATOSLOCALSTORAGE = localStorage.getItem('datosSeleccionados');
// Convierto la cadena JSON en un objeto JavaScript
const DATOSSELECCIONADOS = JSON.parse(DATOSLOCALSTORAGE);
// Creo una instancia de la clase Vuelo con los datos obtenidos
const VUELO = new Vuelo(DATOSSELECCIONADOS);

// Resumen de los pasajes a comprar
console.log(`|--------------------|\n| RESUMEN DE PASAJES |\n|--------------------|`);
console.log(`Origen: ${VUELO.origen} `);
console.log(`Destino: ${VUELO.destino} `);
console.log(`Clase: ${VUELO.clase} `);
console.log(`Cantidad de pasajeros: ${VUELO.cantidadPasajeros} `);
console.log(`Tipo de vuelo: ${VUELO.esIdaYVuelta} `)
console.log(`|----------------|\n| COSTO DE VIAJE |\n|----------------| `);
console.log(`Precio Base: ${VUELO.precioBase.toFixed(2)} `);
console.log(`Precio Clase: ${VUELO.precioClase.toFixed(2)} `);
console.log(`PRECIO TOTAL(SIN IMPUESTOS): ${VUELO.precioDestino.toFixed(2)} `);
console.log(`Precio tipo destino: ${VUELO.precioIda.toFixed(2)} `);
console.log(`Impuestos y tasas: ${VUELO.impuestosTotal.toFixed(2)} `);
console.log(`PRECIO TOTAL(CON IMPUESTOS): ${VUELO.precioTotalPasaje().toFixed(2)} `);