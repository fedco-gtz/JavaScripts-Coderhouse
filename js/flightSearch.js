// |--------------------------------------------------|
// |  Código que muestra cards de busqueda de vuelos  |
// |--------------------------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const ALERTA_DIV = document.getElementById("alerta");
    const AEROLINEAS_LOGOS = [
        "https://static.almundo.com/img/airlines/FO-ISO.svg",
        "https://static.almundo.com/img/airlines/WJ-ISO.svg",
        "https://static.almundo.com/img/airlines/AR-ISO.svg"
    ];

    document.getElementById("buscarBtn").addEventListener("click", () => {
        const TIPO_VUELO = document.querySelector('input[name="tipo_vuelo"]:checked').value.toUpperCase();
        const ORIGEN = document.getElementById("origenInput").value.toUpperCase();
        const DESTINO = document.getElementById("destinoInput").value.toUpperCase();
        const FECHA = document.getElementById("fecha").value.toUpperCase();
        const FECHA_REGRESO = document.getElementById("fecha_regreso").value.toUpperCase();
        const CANTIDAD_PERSONAS = document.getElementById("cantidad_personas").value.toUpperCase();

        if (!TIPO_VUELO || !ORIGEN || !DESTINO || !FECHA || !CANTIDAD_PERSONAS) {
            ALERTA_DIV.textContent = "Por favor complete todos los campos del formulario.";
            ALERTA_DIV.style.display = "block";
            return;
        };

        ALERTA_DIV.textContent = "";
        ALERTA_DIV.style.display = "none";

        const NUM_RESULTADOS = Math.floor(Math.random() * 5) + 1;
        const RESULTADOS_CONTAINER = document.getElementById("resultadosContainer");
        RESULTADOS_CONTAINER.innerHTML = "";

        for (let i = 0; i < NUM_RESULTADOS; i++) {
            const AEROLINEA_LOGO_INDEX = Math.floor(Math.random() * AEROLINEAS_LOGOS.length);
            const LOGO_URL = AEROLINEAS_LOGOS[AEROLINEA_LOGO_INDEX];
            const AEROLINEA = "AEROLÍNEA " + (i + 1);
            const INCLUYE_EQUIPAJE = Math.random() < 0.5;
            
            // Generar hora de vuelo aleatoria
            const horaVuelo = Math.floor(Math.random() * 24);
            const minutosVuelo = Math.floor(Math.random() * 60);
            const horaVueloFormato = `${horaVuelo.toString().padStart(2, '0')}:${minutosVuelo.toString().padStart(2, '0')}`;

            // Obtener el día de la semana
            const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const fechaSeleccionada = new Date(FECHA);
            const diaSemana = diasSemana[fechaSeleccionada.getDay()];

            // Formatear la fecha a dd/mm/aaaa
            const fechaFormateada = `${fechaSeleccionada.getDate().toString().padStart(2, '0')}/${(fechaSeleccionada.getMonth() + 1).toString().padStart(2, '0')}/${fechaSeleccionada.getFullYear()}`;

            const CARD = document.createElement("div");
            CARD.classList.add("card");

            const CARD_BODY = document.createElement("div");
            CARD_BODY.classList.add("card-body");

            const CARD_TITLE = document.createElement("h5");
            CARD_TITLE.classList.add("card-title");

            const CARD_TEXT = document.createElement("p");
            CARD_TEXT.classList.add("card-text");
            CARD_TEXT.innerHTML = `
                <strong>Origen:</strong> ${ORIGEN}<br>
                <strong>Destino:</strong> ${DESTINO}<br>
                <strong>Fecha de Viaje:</strong> ${diaSemana.toUpperCase()}, ${fechaFormateada}<br>
                ${TIPO_VUELO === "IDA-VUELTA" ? `<strong>Fecha de Regreso:</strong> ${FECHA_REGRESO || 'N/A'}<br>` : ''}
                <strong>Hora de Vuelo:</strong> ${horaVueloFormato}<br>
                <strong>Clase:</strong> ${document.getElementById("clase").value.toUpperCase()}<br>
                <strong>Cantidad de Personas:</strong> ${CANTIDAD_PERSONAS}<br>
                <strong>Incluye Equipaje:</strong> ${INCLUYE_EQUIPAJE ? "SÍ" : "NO"}
            `;

            const SELECCIONAR_BTN = document.createElement("button");
            SELECCIONAR_BTN.classList.add("btn", "btn-primary", "seleccionarBtn");
            SELECCIONAR_BTN.textContent = "SELECCIONAR";

            SELECCIONAR_BTN.addEventListener("click", () => {
                const DATOS_SELECCIONADOS = {
                    origen: ORIGEN,
                    destino: DESTINO,
                    fecha: fechaFormateada,
                    fechaRegreso: FECHA_REGRESO || 'N/A',
                    horaVuelo: horaVueloFormato,
                    clase: document.getElementById("clase").value.toUpperCase(),
                    cantidadPersonas: CANTIDAD_PERSONAS,
                    incluyeEquipaje: INCLUYE_EQUIPAJE ? "SÍ" : "NO"
                };

                localStorage.setItem("datosSeleccionados", JSON.stringify(DATOS_SELECCIONADOS));
                alert("Datos seleccionados almacenados en localStorage.");
            });

            const LOGO_AEROLINEA = document.createElement("img");
            LOGO_AEROLINEA.src = LOGO_URL;
            LOGO_AEROLINEA.alt = AEROLINEA;
            LOGO_AEROLINEA.classList.add("logoAerolinea");
            LOGO_AEROLINEA.style.width = "60px";
            LOGO_AEROLINEA.style.height = "60px";

            CARD_BODY.appendChild(LOGO_AEROLINEA);
            CARD_BODY.appendChild(CARD_TITLE);
            CARD_BODY.appendChild(CARD_TEXT);
            CARD_BODY.appendChild(SELECCIONAR_BTN);
            CARD.appendChild(CARD_BODY);
            RESULTADOS_CONTAINER.appendChild(CARD);
        };
    });
});




