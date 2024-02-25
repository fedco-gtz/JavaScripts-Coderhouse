// |------------------------------------------------------|
// |  Código que implementa la lógica del pago del vuelo  |
// |------------------------------------------------------|
document.addEventListener('DOMContentLoaded', function () {
    const FORM = document.getElementById('formularioVuelo');

    FORM.addEventListener('submit', function (event) {
        event.preventDefault();

        const TIPO_PAGO = document.querySelector('input[name="tipo_pago"]:checked');
        const NUMERO_TARJETA = document.getElementById('NumeroTarjetaInput').value;
        const CODIGO_SEGURIDAD = document.getElementById('codigoSeguridadInput').value;
        const VENCIMIENTO_TARJETA = document.getElementById('vencimientoTarjetaInput').value;
        const NOMBRE_TITULAR = document.getElementById('nombreTitularInput').value;
        const ACEPTA_TERMINOS = document.getElementById('terminosCondiciones').checked;

        let CUOTAS_CREDITO = 1; 
        if (TIPO_PAGO.value === "Tarjeta Crédito") {
            CUOTAS_CREDITO = parseInt(document.getElementById('cuotasCreditoOption').value);
        }

        console.log(`|-----------------|\n| RESUMEN DE PAGO |\n|-----------------|`);
        console.log(`Tipo de Pago: ${TIPO_PAGO.value}`);
        console.log(`Número de Tarjeta: ${NUMERO_TARJETA}`);
        console.log(`Código de Seguridad: ${CODIGO_SEGURIDAD}`);
        console.log(`Vencimiento de Tarjeta: ${VENCIMIENTO_TARJETA}`);
        console.log(`Nombre del Titular: ${NOMBRE_TITULAR}`);
        console.log(`Cuotas de Crédito: ${CUOTAS_CREDITO}`);
        console.log(`Acepta Términos y Condiciones: ${ACEPTA_TERMINOS}`);

        verificarEmisor(NUMERO_TARJETA, CODIGO_SEGURIDAD, CUOTAS_CREDITO);
    });
});

function verificarEmisor(NUMERO_TARJETA, CODIGO_SEGURIDAD, CUOTAS_CREDITO) {
    const PRIMER_DIGITO = NUMERO_TARJETA.charAt(0);
    const LONGITUD = NUMERO_TARJETA.length;
    let INTERES = 0;

    let EMISOR = "Desconocido";
    let LONGITUD_CODIGO_SEGURIDAD_REQUERIDA = 0;

    if (LONGITUD === 16) {
        if (PRIMER_DIGITO === '4') {
            EMISOR = "VISA";
            LONGITUD_CODIGO_SEGURIDAD_REQUERIDA = 3;
            if (CUOTAS_CREDITO === 9) {
                INTERES = 0.4;
            } else if (CUOTAS_CREDITO === 12) {
                INTERES = 1.1;
            }
        } else if (PRIMER_DIGITO === '5') {
            EMISOR = "MASTERCARD";
            LONGITUD_CODIGO_SEGURIDAD_REQUERIDA = 3;
            INTERES = 0.25;
        }
    } else if (LONGITUD === 15 && PRIMER_DIGITO === '3') {
        EMISOR = "AMERICAN EXPRESS";
        LONGITUD_CODIGO_SEGURIDAD_REQUERIDA = 4;
        if (CUOTAS_CREDITO !== 12) {
            INTERES = 0.45;
        }
    }

    if (CODIGO_SEGURIDAD.length === LONGITUD_CODIGO_SEGURIDAD_REQUERIDA) {
        console.log(`Emisor de la tarjeta: ${EMISOR}`);
        console.log(`Longitud del código de seguridad correcta`);
    } else {
        console.log(`Error: Longitud incorrecta del código de seguridad para ${EMISOR}`);
    }
    console.log(`Total de intereses: ${PRECIOTOTALSININTERESES * (INTERES)}%`);
    console.log(`Total a pagar: ${(PRECIOTOTALSININTERESES * (INTERES)) + PRECIOTOTALSININTERESES}`);
    console.log(`Pagarás cuotas de: ${((PRECIOTOTALSININTERESES * (INTERES)) + PRECIOTOTALSININTERESES) / CUOTAS_CREDITO}`);
}

// |---------------------------------------------------------------|
// |  Código que te redirige a la página de procesamiento de pago  |
// |---------------------------------------------------------------|
//document.addEventListener("DOMContentLoaded", function () {
  //  document.getElementById("pagarButton").addEventListener("click", function () {
    //    window.location.href = "../pages/booking.html";
   // });
//});