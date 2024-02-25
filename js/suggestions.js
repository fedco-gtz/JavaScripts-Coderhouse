// |-------------------------------------------------------------|
// |     Código que muestra sugerencias en origen y destino      |
// |-------------------------------------------------------------|
document.addEventListener("DOMContentLoaded", function () {
    const ORIGEN_INPUT = document.getElementById("origenInput");
    const SUGERENCIAS = document.getElementById("sugerenciasOrigen");

    const SUGERENCIA_LISTA = [
        "CABA, AEP",
        "Buenos Aires, EZE",
        "Madrid",
        "Nueva York",
        "Londres",
        "París",
        "Tokio",
        "Roma",
        "Santiago",
        "Los Ángeles",
    ];

    function mostrarSugerencias() {
        const VALOR_INPUT = ORIGEN_INPUT.value.toLowerCase();
        
        if (VALOR_INPUT === "") {
            SUGERENCIAS.innerHTML = "";
            return;
        }

        SUGERENCIAS.innerHTML = "";

        const sugerenciasFiltradas = SUGERENCIA_LISTA.filter(sugerencia =>
            sugerencia.toLowerCase().startsWith(VALOR_INPUT)
        );

        sugerenciasFiltradas.forEach(sugerencia => {
            const sugerenciaElemento = document.createElement("div");
            sugerenciaElemento.textContent = sugerencia;
            sugerenciaElemento.classList.add("sugerencia");
            SUGERENCIAS.appendChild(sugerenciaElemento);
        });
    }

    ORIGEN_INPUT.addEventListener("input", mostrarSugerencias);

    SUGERENCIAS.addEventListener("click", function (event) {
        if (event.target.classList.contains("sugerencia")) {
            ORIGEN_INPUT.value = event.target.textContent;
            SUGERENCIAS.innerHTML = ""; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ORIGEN_INPUT = document.getElementById("destinoInput");
    const SUGERENCIAS = document.getElementById("sugerenciasDestino");

    const SUGERENCIA_LISTA = [
        "CABA, AEP",
        "Buenos Aires, EZE",
        "Madrid",
        "Nueva York",
        "Londres",
        "París",
        "Tokio",
        "Roma",
        "Santiago",
        "Los Ángeles",
    ];

    function mostrarSugerencias() {
        const VALOR_INPUT = ORIGEN_INPUT.value.toLowerCase();
        
        if (VALOR_INPUT === "") {
            SUGERENCIAS.innerHTML = "";
            return;
        }

        SUGERENCIAS.innerHTML = "";

        const sugerenciasFiltradas = SUGERENCIA_LISTA.filter(sugerencia =>
            sugerencia.toLowerCase().startsWith(VALOR_INPUT)
        );

        sugerenciasFiltradas.forEach(sugerencia => {
            const sugerenciaElemento = document.createElement("div");
            sugerenciaElemento.textContent = sugerencia;
            sugerenciaElemento.classList.add("sugerencia");
            SUGERENCIAS.appendChild(sugerenciaElemento);
        });
    }

    ORIGEN_INPUT.addEventListener("input", mostrarSugerencias);

    SUGERENCIAS.addEventListener("click", function (event) {
        if (event.target.classList.contains("sugerencia")) {
            ORIGEN_INPUT.value = event.target.textContent;
            SUGERENCIAS.innerHTML = ""; 
        }
    });
});
