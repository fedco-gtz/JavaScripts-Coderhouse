// |--------------------------------------------------|
// |  Código que muestra cards de busqueda de vuelos  |
// |--------------------------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const alertaDiv = document.getElementById("alerta");

    document.getElementById("buscarBtn").addEventListener("click", () => {
        const TIPO_VUELO = document.querySelector('input[name="tipo_vuelo"]:checked').value;
        const ORIGEN = document.getElementById("origenInput").value;
        const DESTINO = document.getElementById("destinoInput").value;
        const FECHA = document.getElementById("fecha").value;
        const FECHA_REGRESO = document.getElementById("fecha_regreso").value;
        const CANTIDAD_PERSONAS = document.getElementById("cantidad_personas").value;

        if (!TIPO_VUELO || !ORIGEN || !DESTINO || !FECHA || !CANTIDAD_PERSONAS) {
            alertaDiv.textContent = "Por favor complete todos los campos del formulario.";
            alertaDiv.style.display = "block";
            return;
        };

        alertaDiv.textContent = "";
        alertaDiv.style.display = "none";

        const numResultados = Math.floor(Math.random() * 5) + 1;
        const resultadosContainer = document.getElementById("resultadosContainer");
        resultadosContainer.innerHTML = "";

        for (let i = 0; i < numResultados; i++) {
            const aerolinea = "Aerolínea " + (i + 1);
            const incluyeEquipaje = Math.random() < 0.5;

            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = "Vuelo #" + (i + 1);

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerHTML = `
                <strong>Origen:</strong> ${ORIGEN}<br>
                <strong>Destino:</strong> ${DESTINO}<br>
                <strong>Fecha de Viaje:</strong> ${FECHA}<br>
                <strong>Fecha de Regreso:</strong> ${FECHA_REGRESO || 'N/A'}<br>
                <strong>Clase:</strong> ${document.getElementById("clase").value}<br>
                <strong>Cantidad de Personas:</strong> ${CANTIDAD_PERSONAS}<br>
                <strong>Incluye Equipaje:</strong> ${incluyeEquipaje ? "Sí" : "No"}
            `;

            const seleccionarBtn = document.createElement("button");
            seleccionarBtn.classList.add("btn", "btn-primary", "seleccionarBtn");
            seleccionarBtn.textContent = "SELECCIONAR";

            seleccionarBtn.addEventListener("click", () => {
                const datosSeleccionados = {
                    origen: ORIGEN,
                    destino: DESTINO,
                    fecha: FECHA,
                    fechaRegreso: FECHA_REGRESO || 'N/A',
                    clase: document.getElementById("clase").value,
                    cantidadPersonas: CANTIDAD_PERSONAS,
                    incluyeEquipaje: incluyeEquipaje ? "Sí" : "No"
                };

                localStorage.setItem("datosSeleccionados", JSON.stringify(datosSeleccionados));
                alert("Datos seleccionados almacenados en localStorage.");
            });

            const logoAerolinea = document.createElement("img");
            logoAerolinea.src = `https://via.placeholder.com/50x50?text=${aerolinea}`;
            logoAerolinea.alt = aerolinea;
            logoAerolinea.classList.add("logoAerolinea");

            cardBody.appendChild(logoAerolinea);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(seleccionarBtn);
            card.appendChild(cardBody);
            resultadosContainer.appendChild(card);
        };
    });
});

