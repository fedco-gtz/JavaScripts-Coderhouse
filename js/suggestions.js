// |-------------------------------------------------------------|
// |     Código que muestra sugerencias en origen y destino      |
// |-------------------------------------------------------------|
document.addEventListener("DOMContentLoaded", function () {
    const ORIGEN_INPUT = document.getElementById("origenInput");
    const SUGERENCIAS = document.getElementById("sugerenciasOrigen");

    const SUGERENCIA_LISTA = [
        "BUENOS AIRES | EPA | AEROPUERTO EL PALOMAR",
        "BUENOS AIRES | EZE | AEROPUERTO INT. EZEIZA",
        "BUENOS AIRES | FDO | AEROPUERTO INT. DE SAN FERNANDO",
        "BUENOS AIRES | AEP | AEROPARQUE JORGE NEWBERY",
        "CATAMARCA | CTC | AEROPUERTO GRAL. FELIPE VARELA",
        "CHACO | RES | AEROPUERTO INT. DE RESISTENCIA",
        "CHUBUT | CRD | AEROPUERTO INT. GRAL. ENRIQUE MOSCONI",
        "CHUBUT | EQS | AEROPUERTO DE ESQUEL, BRIG. GRAL. ANTONIO PARODI",
        "CHUBUT | PMY | AEROPUERTO EL TEHUELCHE",
        "CÓRDOBA | COR | AEROPUERTO INT. ING. AER. AMBROSIO TARAVELLA",
        "CÓRDOBA | RCU | AEROPUERTO ÁREA DE MATERIAL DE RÍO CUARTO",
        "ENTRE RÍOS | PRA | AEROPUERTO GRAL. URQUIZA",
        "FORMOSA | FMA | AEROPUERTO INT. DE FORMOSA",
        "JUJUY | JUJ | AEROPUERTO INT. GDOR. HORACIO GUZMÁN",
        "LA PAMPA | GPO | AEROPUERTO DE GRAL. PICO",
        "LA PAMPA | RSA | AEROPUERTO DE SANTA ROSA",
        "LA RIOJA | IRJ | AEROPUERTO CAP. VICENTE ALMANDOS ALMONACIDE",
        "MAR DEL PLATA | MDQ | AEROPUERTO INT. ASTOR PIAZZOLLA",
        "MENDOZA | AFA | AEROPUERTO INT. SUBOFICIAL AYUDANTE SANTIAGO GERMANO",
        "MENDOZA | LGS | AEROPUERTO INT. DE MALARGÜE",
        "MENDOZA | MDZ | AEROPUERTO INT. EL PLUMERILLO",
        "MISIONES | IGR | AEROPUERTO INT. DE LAS CATARATAS DEL IGUAZÚ",
        "MISIONES | PSS | AEROPUERTO LIBERTADOR GRAL. JOSÉ DE SAN MARTÍN",
        "RÍO NEGRO | BRC | AEROPUERTO INT. TTE. LUIS CANDELARIA",
        "RÍO NEGRO | VDM | AEROPUERTO INT. GDOR. EDGARDO CASTELLO",
        "SALTA | SLA | AEROPUERTO INT. MARTÍN MIGUEL DE GÜEMES",
        "SAN JUAN | UAQ | AEROPUERTO DE SAN JUAN",
        "SAN LUIS | LUQ | AEROPUERTO BRIG. MAYOR CESAR RAÚL OJEDA",
        "SAN LUIS | VME | AEROPUERTO DE VILLA REYNOLDS",
        "SANTA CRUZ | RGL | AEROPUERTO INT. PILOTO CIVIL NORBERTO FERNÁNDEZ",
        "SANTA FÉ | RCQ | AEROPUERTO TTE. DANIEL JUKIC",
        "SANTIAGO DEL ESTERO | RHD | AEROPUERTO INT. TERMAS DE RIO HONDO",
        "SANTIAGO DEL ESTERO | SDE | AEROPUERTO 'MADRE DE CIUDADES'",
        "TIERRA DEL FUEGO | RGA | AEROPUERTO INT. GDOR. RAMON TREJO NOEL",
        "TUCUMÁN | TUC | AEROPUERTO INT. DE TUCUMÁN BENJAMÍN MATIENZO",
    ];

    function mostrarSugerencias() {
        const VALOR_INPUT = ORIGEN_INPUT.value.toUpperCase();
        
        if (VALOR_INPUT === "") {
            SUGERENCIAS.innerHTML = "";
            return;
        }

        SUGERENCIAS.innerHTML = "";

        const sugerenciasFiltradas = SUGERENCIA_LISTA.filter(sugerencia =>
            sugerencia.toUpperCase().startsWith(VALOR_INPUT)
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
        "BUENOS AIRES | EPA | AEROPUERTO EL PALOMAR",
        "BUENOS AIRES | EZE | AEROPUERTO INT. EZEIZA",
        "BUENOS AIRES | FDO | AEROPUERTO INT. DE SAN FERNANDO",
        "BUENOS AIRES | AEP | AEROPARQUE JORGE NEWBERY",
        "CATAMARCA | CTC | AEROPUERTO GRAL. FELIPE VARELA",
        "CHACO | RES | AEROPUERTO INT. DE RESISTENCIA",
        "CHUBUT | CRD | AEROPUERTO INT. GRAL. ENRIQUE MOSCONI",
        "CHUBUT | EQS | AEROPUERTO DE ESQUEL, BRIG. GRAL. ANTONIO PARODI",
        "CHUBUT | PMY | AEROPUERTO EL TEHUELCHE",
        "CÓRDOBA | COR | AEROPUERTO INT. ING. AER. AMBROSIO TARAVELLA",
        "CÓRDOBA | RCU | AEROPUERTO ÁREA DE MATERIAL DE RÍO CUARTO",
        "ENTRE RÍOS | PRA | AEROPUERTO GRAL. URQUIZA",
        "FORMOSA | FMA | AEROPUERTO INT. DE FORMOSA",
        "JUJUY | JUJ | AEROPUERTO INT. GDOR. HORACIO GUZMÁN",
        "LA PAMPA | GPO | AEROPUERTO DE GRAL. PICO",
        "LA PAMPA | RSA | AEROPUERTO DE SANTA ROSA",
        "LA RIOJA | IRJ | AEROPUERTO CAP. VICENTE ALMANDOS ALMONACIDE",
        "MAR DEL PLATA | MDQ | AEROPUERTO INT. ASTOR PIAZZOLLA",
        "MENDOZA | AFA | AEROPUERTO INT. SUBOFICIAL AYUDANTE SANTIAGO GERMANO",
        "MENDOZA | LGS | AEROPUERTO INT. DE MALARGÜE",
        "MENDOZA | MDZ | AEROPUERTO INT. EL PLUMERILLO",
        "MISIONES | IGR | AEROPUERTO INT. DE LAS CATARATAS DEL IGUAZÚ",
        "MISIONES | PSS | AEROPUERTO LIBERTADOR GRAL. JOSÉ DE SAN MARTÍN",
        "RÍO NEGRO | BRC | AEROPUERTO INT. TTE. LUIS CANDELARIA",
        "RÍO NEGRO | VDM | AEROPUERTO INT. GDOR. EDGARDO CASTELLO",
        "SALTA | SLA | AEROPUERTO INT. MARTÍN MIGUEL DE GÜEMES",
        "SAN JUAN | UAQ | AEROPUERTO DE SAN JUAN",
        "SAN LUIS | LUQ | AEROPUERTO BRIG. MAYOR CESAR RAÚL OJEDA",
        "SAN LUIS | VME | AEROPUERTO DE VILLA REYNOLDS",
        "SANTA CRUZ | RGL | AEROPUERTO INT. PILOTO CIVIL NORBERTO FERNÁNDEZ",
        "SANTA FÉ | RCQ | AEROPUERTO TTE. DANIEL JUKIC",
        "SANTIAGO DEL ESTERO | RHD | AEROPUERTO INT. TERMAS DE RIO HONDO",
        "SANTIAGO DEL ESTERO | SDE | AEROPUERTO 'MADRE DE CIUDADES'",
        "TIERRA DEL FUEGO | RGA | AEROPUERTO INT. GDOR. RAMON TREJO NOEL",
        "TUCUMÁN | TUC | AEROPUERTO INT. DE TUCUMÁN BENJAMÍN MATIENZO",
    ];

    function mostrarSugerencias() {
        const VALOR_INPUT = ORIGEN_INPUT.value.toUpperCase();
        
        if (VALOR_INPUT === "") {
            SUGERENCIAS.innerHTML = "";
            return;
        }

        SUGERENCIAS.innerHTML = "";

        const sugerenciasFiltradas = SUGERENCIA_LISTA.filter(sugerencia =>
            sugerencia.toUpperCase().startsWith(VALOR_INPUT)
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