// |--------------------------------------------------|
// |     Código que muestra el detalle del vuelo      |
// |--------------------------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const SELECTED_DATA_CONTAINER = document.getElementById("selectedDataContainer");

    const DATOS_SELECCIONADOS_STRING = localStorage.getItem("datosSeleccionados");
    if (DATOS_SELECCIONADOS_STRING) {
        const DATOS_SELECCIONADOS = JSON.parse(DATOS_SELECCIONADOS_STRING);

        const DATOS_LIST = document.createElement("ul");
        DATOS_LIST.innerHTML = `
            <li><strong>Origen</strong> <br>${DATOS_SELECCIONADOS.origen}</li>
            <li><strong>Destino</strong> <br>${DATOS_SELECCIONADOS.destino}</li>
            <li>|<br>|</li>
            <li><strong>Partida</strong> <br>${DATOS_SELECCIONADOS.fecha}</li>
            <li><strong>Regreso</strong> <br>${DATOS_SELECCIONADOS.fechaRegreso}</li>
            <li>|<br>|</li>
            <li><strong>Clase</strong> <br>${DATOS_SELECCIONADOS.clase}</li>
            <li><strong>Pasajeros</strong> <br>${DATOS_SELECCIONADOS.cantidadPersonas}</li>
            <li>|<br>|</li>
            <li><strong>Precio total <br>$ ${VUELO.totalIda + VUELO.impuestosTotal}</strong></li>
        `;
        SELECTED_DATA_CONTAINER.appendChild(DATOS_LIST);
    } else {
        SELECTED_DATA_CONTAINER.textContent = "No hay vuelos seleccionados";
    }
});

