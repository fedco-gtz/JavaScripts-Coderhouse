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
        // Armado de viaje
        this.origen = datos.origen;
        this.destino = datos.destino;
        this.clase = datos.clase;
        this.cantidadPasajeros = datos.cantidadPersonas;
        this.esIdaYVuelta = datos.tipoVuelo;
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
        let longitudOrigen = this.origen.length;
        let longitudDestino = this.destino.length;
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
        let precioDestino = (this.calcularPrecioBase() + this.calcularPrecioClase())*110;
        return precioDestino;
    };
    // Función que calcula el precio segun tipo de vuelo
    calcularPrecioIda() {
        if (this.esIdaYVuelta === "IDA_VUELTA") {
            let precioIdaYVuelta = this.calcularPrecioDestino() * 0.9 + this.calcularPrecioDestino();
            return precioIdaYVuelta;
        } else {
            return this.calcularPrecioDestino()
        }
    };
    // Función que calcula los impuestos a cobrar
    calcularImpuestos() {
        let tasas = 0.5;
        let iva = 0.21;
        let impuestoTotal = tasas + iva;
        if (this.esIdaYVuelta === "IDA_VUELTA") {
            let impuestos = this.calcularPrecioIda() * impuestoTotal;
            return impuestos;
        } else {
            return this.calcularPrecioDestino() * impuestoTotal;
        }
    };
    // Función que calcula el precio total del pasaje
    precioTotalPasaje() {
        let precioTotal = (this.calcularPrecioIda() + this.calcularImpuestos())*this.cantidadPasajeros;
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




