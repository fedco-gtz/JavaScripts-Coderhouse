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
        const FECHA = document.getElementById("fecha").value;
        const FECHA_REGRESO = document.getElementById("fecha_regreso").value;
        const CANTIDAD_PERSONAS = document.getElementById("cantidad_personas").value.toUpperCase();

        if (!TIPO_VUELO || !ORIGEN || !DESTINO || !FECHA || !CANTIDAD_PERSONAS) {
            ALERTA_DIV.textContent = "Por favor complete todos los campos del formulario.";
            ALERTA_DIV.style.display = "block";
            return;
        };

        if (ORIGEN === DESTINO) {
            ALERTA_DIV.textContent = "El lugar de origen no puede ser igual al lugar de destino."
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
            
            const HORA_VUELO = Math.floor(Math.random() * 24);
            const MINUTOS_VUELO = Math.floor(Math.random() * 60);
            const HORA_VUELO_FORMATO = `${HORA_VUELO.toString().padStart(2, '0')}:${MINUTOS_VUELO.toString().padStart(2, '0')}`;

            const DIAS_SEMANA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const FECHA_SELECCIONADA = new Date(FECHA);
            const DIA_SEMANA = DIAS_SEMANA[FECHA_SELECCIONADA.getDay()];

            const FECHA_FORMATEADA = `${FECHA_SELECCIONADA.getDate().toString().padStart(2, '0')}/${(FECHA_SELECCIONADA.getMonth() + 1).toString().padStart(2, '0')}/${FECHA_SELECCIONADA.getFullYear()}`;

            const FECHA_REGRESO_SELECCIONADA = new Date(FECHA_REGRESO);
            const DIA_REGRESO_SEMANA = DIAS_SEMANA[FECHA_REGRESO_SELECCIONADA.getDay()];
            const FECHA_REGRESO_FORMATEADA = FECHA_REGRESO ? `${FECHA_REGRESO_SELECCIONADA.getDate().toString().padStart(2, '0')}/${(FECHA_REGRESO_SELECCIONADA.getMonth() + 1).toString().padStart(2, '0')}/${FECHA_REGRESO_SELECCIONADA.getFullYear()}` : 'N/A';

            const CARD = document.createElement("div");
            CARD.classList.add("resultCard");

            const CARD_BODY = document.createElement("div");
            CARD_BODY.classList.add("card-body");

            const CARD_TITLE = document.createElement("h5");
            CARD_TITLE.classList.add("card-title");

            const CARD_TEXT = document.createElement("p");
            CARD_TEXT.classList.add("cardText");
            CARD_TEXT.innerHTML = `
            <ul>
            <li><strong>Origen</strong> <br> ${ORIGEN}</li>
            <li><strong>Destino</strong> <br> ${DESTINO}</li>
            <li><strong>Fecha de Viaje</strong> <br> ${DIA_SEMANA.toUpperCase()}, ${FECHA_FORMATEADA}</li>
            <li>${TIPO_VUELO === "IDA_VUELTA" ? `<strong>Fecha de Regreso</strong> <br> ${DIA_REGRESO_SEMANA.toUpperCase()}, ${FECHA_REGRESO_FORMATEADA}<br>` : ''}</li>
            <li><strong>Hora de Vuelo</strong> <br> ${HORA_VUELO_FORMATO}</li>
            <li><strong>Clase</strong> <br> ${document.getElementById("clase").value.toUpperCase()}</li>
            <li><strong>Cantidad de Personas</strong> <br> ${CANTIDAD_PERSONAS}</li>
            <li><strong>Incluye Equipaje</strong> <br> ${INCLUYE_EQUIPAJE ? "SÍ" : "NO"}</li>
            </ul>`;

            const SELECCIONAR_BTN = document.createElement("button");
            SELECCIONAR_BTN.classList.add("btn", "btn-primary", "seleccionarBtn");
            SELECCIONAR_BTN.textContent = "SELECCIONAR";

            SELECCIONAR_BTN.addEventListener("click", () => {
                const DATOS_SELECCIONADOS = {
                    origen: ORIGEN,
                    destino: DESTINO,
                    fecha: FECHA_FORMATEADA,
                    fechaRegreso: FECHA_REGRESO_FORMATEADA,
                    tipoVuelo: TIPO_VUELO,
                    horaVuelo: HORA_VUELO_FORMATO,
                    clase: document.getElementById("clase").value.toUpperCase(),
                    cantidadPersonas: CANTIDAD_PERSONAS,
                    incluyeEquipaje: INCLUYE_EQUIPAJE ? "SÍ" : "NO"
                };

                localStorage.setItem("datosSeleccionados", JSON.stringify(DATOS_SELECCIONADOS));
                window.location.href = "./pages/pay.html";;
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


