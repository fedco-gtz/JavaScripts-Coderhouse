// |--------------------------------------------------|
// |     Código que muestra el detalle del vuelo      |
// |--------------------------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const SELECTED_DATA_CONTAINER = document.getElementById("selectedDataContainer");

    const DATOS_SELECCIONADOS_STRING = localStorage.getItem("datosSeleccionados");
    if (DATOS_SELECCIONADOS_STRING) {
        const DATOS_SELECCIONADOS = JSON.parse(DATOS_SELECCIONADOS_STRING);

        const LOGO_AEROLINEA = document.createElement("img");
        LOGO_AEROLINEA.src = `https://via.placeholder.com/50x50?text=${DATOS_SELECCIONADOS.origen}`;
        LOGO_AEROLINEA.alt = DATOS_SELECCIONADOS.origen;
        LOGO_AEROLINEA.classList.add("logoAerolinea");
        SELECTED_DATA_CONTAINER.appendChild(LOGO_AEROLINEA);
        const DATOS_LIST = document.createElement("ul");
        DATOS_LIST.innerHTML = `
            <li><strong>Ida</strong> <br>${DATOS_SELECCIONADOS.fecha}</li>
            <li><strong>Vuelta</strong> <br>${DATOS_SELECCIONADOS.fechaRegreso}</li>
            <li><strong>Clase</strong> <br>${DATOS_SELECCIONADOS.clase}</li>
            <li><strong>Cantidad de Personas</strong> <br>${DATOS_SELECCIONADOS.cantidadPersonas}</li>
            <li><strong>Precio</strong> <br> ${DATOS_SELECCIONADOS.incluyeEquipaje}</li>
        `;
        SELECTED_DATA_CONTAINER.appendChild(DATOS_LIST);
    } else {
        SELECTED_DATA_CONTAINER.textContent = "No hay vuelos seleccionados";
    }
});
