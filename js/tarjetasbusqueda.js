function buscarVuelos() {
    const destinoSeleccionado = document.getElementById('destinoInput').value;
const vuelosDisponibles = obtenerVuelosPorDestino(destinoSeleccionado);
mostrarResultados(vuelosDisponibles);
};

function obtenerVuelosPorDestino(destino) {
const vuelosFicticios = [
    {
        empresa: "Aerolínea 1",
        logo: "logo_aerolinea_1.png",
        salida: {
            hora: "10:00 AM",
            destino: "Ciudad A",
            codigoAeropuerto: "ABC"
        },
        llegada: {
            hora: "12:00 PM",
            destino: "Ciudad B",
            codigoAeropuerto: "XYZ"
        },
        duracion: "2 horas",
        incluyeEquipaje: true,
        tipoVuelo: "IDA"
    },
    {
        empresa: "Aerolínea 2",
        logo: "logo_aerolinea_2.png",
        salida: {
            hora: "12:30 PM",
            destino: "Ciudad C",
            codigoAeropuerto: "DEF"
        },
        llegada: {
            hora: "3:00 PM",
            destino: "Ciudad D",
            codigoAeropuerto: "LMN"
        },
        duracion: "2 horas 30 minutos",
        incluyeEquipaje: false,
        tipoVuelo: "IDA_Y_VUELTA"
    },
];

return vuelosFicticios;
}

function mostrarResultados(vuelos) {
const listaVuelos = document.getElementById('lista-vuelos');
listaVuelos.innerHTML = '';

vuelos.forEach((vuelo) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${vuelo.logo}" alt="${vuelo.empresa} Logo">
        <div class="flight-details">
            <p><strong>Aerolínea:</strong> ${vuelo.empresa}</p>
            <table>
                <tr>
                    <th>Salida</th>
                    <th>Llegada</th>
                    <th>Duración del Vuelo</th>
                    <th>Incluye Equipaje</th>
                </tr>
                <tr>
                    <td>${vuelo.salida.hora}<br>${vuelo.salida.destino}<br>${vuelo.salida.codigoAeropuerto}</td>
                    <td>${vuelo.llegada.hora}<br>${vuelo.llegada.destino}<br>${vuelo.llegada.codigoAeropuerto}</td>
                    <td>${vuelo.duracion}</td>
                    <td>${vuelo.incluyeEquipaje ? 'Sí' : 'No'}</td>
                </tr>
            </table>
            <div class="boton-container">
                ${vuelo.tipoVuelo === 'IDA' ? '<button onclick="comprarVuelo()">Comprar</button>' : '<button onclick="seleccionarPasajeVuelta()">Seleccionar Pasaje de Vuelta</button>'}
            </div>
        </div>
    `;
    listaVuelos.appendChild(card);
});

const resultadosSection = document.getElementById('resultados');
resultadosSection.style.display = 'block';
}

function comprarVuelo() {
alert("¡Vuelo comprado!");
}

function seleccionarPasajeVuelta() {
alert("Seleccionar pasaje de vuelta...");
}