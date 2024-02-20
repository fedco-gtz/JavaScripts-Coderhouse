document.addEventListener("DOMContentLoaded", () => {
    const datosSeleccionadosContainer = document.getElementById("datosSeleccionadosContainer");

    // Obtener datos almacenados en localStorage
    const datosSeleccionadosString = localStorage.getItem("datosSeleccionados");
    if (datosSeleccionadosString) {
        const datosSeleccionados = JSON.parse(datosSeleccionadosString);

        // Crear elementos HTML para mostrar los datos
        const datosList = document.createElement("ul");
        datosList.innerHTML = `
            <li><strong>Origen:</strong> ${datosSeleccionados.origen}</li>
            <li><strong>Destino:</strong> ${datosSeleccionados.destino}</li>
            <li><strong>Fecha de Viaje:</strong> ${datosSeleccionados.fecha}</li>
            <li><strong>Fecha de Regreso:</strong> ${datosSeleccionados.fechaRegreso}</li>
            <li><strong>Clase:</strong> ${datosSeleccionados.clase}</li>
            <li><strong>Cantidad de Personas:</strong> ${datosSeleccionados.cantidadPersonas}</li>
            <li><strong>Incluye Equipaje:</strong> ${datosSeleccionados.incluyeEquipaje}</li>
        `;

        // Agregar la lista de datos al contenedor en la página
        datosSeleccionadosContainer.appendChild(datosList);
    } else {
        // Manejar el caso donde no hay datos almacenados
        datosSeleccionadosContainer.textContent = "No hay datos seleccionados almacenados.";
    }
});