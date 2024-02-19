// |--------------------------------------------------|
// |  Código que muestra cards de busqueda de vuelos  |
// |--------------------------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const alertaDiv = document.getElementById("alerta");

    document.getElementById("buscarBtn").addEventListener("click", () => {
        const tipoVuelo = document.querySelector('input[name="tipo_vuelo"]:checked').value;
        const origen = document.getElementById("origenInput").value;
        const destino = document.getElementById("destinoInput").value;
        const fecha = document.getElementById("fecha").value;
        const fechaRegreso = document.getElementById("fecha_regreso").value;
        const cantidadPersonas = document.getElementById("cantidad_personas").value;

        if (!tipoVuelo || !origen || !destino || !fecha || !cantidadPersonas) {
            alertaDiv.textContent = "Por favor complete todos los campos del formulario.";
            alertaDiv.style.display = "block";
            return;
        }

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
                <strong>Origen:</strong> ${origen}<br>
                <strong>Destino:</strong> ${destino}<br>
                <strong>Fecha de Viaje:</strong> ${fecha}<br>
                <strong>Fecha de Regreso:</strong> ${fechaRegreso || 'N/A'}<br>
                <strong>Clase:</strong> ${document.getElementById("clase").value}<br>
                <strong>Cantidad de Personas:</strong> ${cantidadPersonas}<br>
                <strong>Incluye Equipaje:</strong> ${incluyeEquipaje ? "Sí" : "No"}
            `;

            const seleccionarBtn = document.createElement("button");
            seleccionarBtn.classList.add("btn", "btn-primary", "seleccionarBtn");
            seleccionarBtn.textContent = "SELECCIONAR";

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
