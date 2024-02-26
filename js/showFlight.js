// |--------------------------------------------------|
// |     Código que muestra el detalle del vuelo      |
// |--------------------------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const SELECTED_DATA_CONTAINER = document.getElementById("selectedDataContainer");

    const DATOS_SELECCIONADOS_STRING = localStorage.getItem("datosSeleccionados");
    if (DATOS_SELECCIONADOS_STRING) {
        const DATOS_SELECCIONADOS = JSON.parse(DATOS_SELECCIONADOS_STRING);
        const tabla = document.createElement("table");
        tabla.innerHTML = `
            <tr>
                <th><strong>Origen</strong></th>
                <th><strong>Destino</strong></th>
            </tr>
            <tr>
                <td>${DATOS_SELECCIONADOS.origen}</td>
                <td>${DATOS_SELECCIONADOS.destino}</td>
            </tr>
            <tr>
                <th><strong>Partida</strong></th>
                <th><strong>Regreso</strong></th>
            </tr>
            <tr>
                <td>${DATOS_SELECCIONADOS.fecha}</td>
                <td>${DATOS_SELECCIONADOS.fechaRegreso}</td>
            </tr>
            <tr>
                <th><strong>Clase</strong></th>
                <th><strong>Pasajeros</strong></th>
            </tr>
            <tr>
                <td>${DATOS_SELECCIONADOS.clase}</td>
                <td>${DATOS_SELECCIONADOS.cantidadPersonas}</td>
            </tr>
            <tr>
                <th colspan="2"><strong>TARIFA TOTAL</strong></th>

            </th>
            <tr>
                <td colspan="2"><strong>${VUELO.precioTotalPasaje().toFixed(2)}</strong></td>
                </tr>
            </tr>
        `;
        SELECTED_DATA_CONTAINER.appendChild(tabla);

    } else {
        SELECTED_DATA_CONTAINER.textContent = "No hay vuelos seleccionados";
    }
});

