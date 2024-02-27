// |----------------------------------------------------------------|
// |  Código que implementa la verificacion del formulario de pago  |
// |----------------------------------------------------------------|
document.addEventListener('DOMContentLoaded', () => {
    const FORM = document.getElementById('formularioVuelo');
    const ERROR_DIV = document.getElementById('errorDiv');
    const CORRECT_DIV = document.getElementById('correctDiv');

    FORM.addEventListener('submit', event => {
        event.preventDefault();

        const TIPO_PAGO = document.querySelector('input[name="tipo_pago"]:checked').value;
        const NUMERO_TARJETA_INPUT = document.getElementById('NumeroTarjetaInput');
        const NUMERO_TARJETA = NUMERO_TARJETA_INPUT.value;
        const CODIGO_SEGURIDAD = document.getElementById('codigoSeguridadInput').value;

        let EMISOR = "Desconocido";
        let codigoSeguridadValido = true;
        let numeroTarjetaValido = true;

        const PRIMER_DIGITO = NUMERO_TARJETA.charAt(0);
        if ((PRIMER_DIGITO === '4' && NUMERO_TARJETA.length !== 16) ||
            (PRIMER_DIGITO === '5' && NUMERO_TARJETA.length !== 16) ||
            (PRIMER_DIGITO === '3' && NUMERO_TARJETA.length !== 15)) {
            numeroTarjetaValido = false;
        } else {
        }

        if (PRIMER_DIGITO === '4' && NUMERO_TARJETA.length === 16) {
            EMISOR = "VISA";
            if (CODIGO_SEGURIDAD.length !== 3) {
                codigoSeguridadValido = false;
            }
        } else if (PRIMER_DIGITO === '5' && NUMERO_TARJETA.length === 16) {
            EMISOR = "MASTERCARD";
            if (CODIGO_SEGURIDAD.length !== 3) {
                codigoSeguridadValido = false;
            }
        } else if (PRIMER_DIGITO === '3' && NUMERO_TARJETA.length === 15) {
            EMISOR = "AMERICAN EXPRESS";
            if (CODIGO_SEGURIDAD.length !== 4) {
                codigoSeguridadValido = false;
            }
        } else {
            codigoSeguridadValido = false;
        };

        if (!codigoSeguridadValido && !numeroTarjetaValido) {
            ERROR_DIV.style.display = 'block';
            return;
        } else if (!codigoSeguridadValido || !numeroTarjetaValido) {
            ERROR_DIV.style.display = 'block';
            CORRECT_DIV.style.display = 'none';
            return;
        } else {
            ERROR_DIV.style.display = 'none';
            CORRECT_DIV.innerText = `Tarjeta ${EMISOR} terminada en ${NUMERO_TARJETA.slice(-4)}           
        `;
            CORRECT_DIV.style.display = 'block';
        }

        document.getElementById('verificarButton').style.display = 'none';
        document.getElementById('pagarButtonContainer').style.display = 'block';
    });

    ERROR_DIV.addEventListener('click', () => {
        FORM.reset();
        ERROR_DIV.style.display = 'none';
    });
});