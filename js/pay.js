/*
class Pago {
    constructor(vuelo) {
        this.tipoPago = vuelo.tipoPago.toUpperCase();
        this.numeroTarjeta = "";
        this.vencimientoTarjeta = "";
        this.codigoSeguridad = "";
        this.nombreTitular = "";
        this.cantidadCuotas = 1;
        this.emisorTarjeta = "";
        this.interesPorcentaje = 0;
        this.totalConIntereses = 0;

        if (this.tipoPago === "TARJETA DEBITO" || this.tipoPago === "TARJETA CREDITO") {
            this.solicitarInformacionTarjeta(vuelo);
            this.detectarEmisorTarjeta();
            if (this.tipoPago === "TARJETA CREDITO") {
                this.solicitarCantidadCuotas();
            }
        }
    }

    solicitarInformacionTarjeta(vuelo) {
        this.numeroTarjeta = prompt("Ingresa el número de tarjeta:");

        if ((this.emisorTarjeta === "Visa" || this.emisorTarjeta === "Mastercard") && this.numeroTarjeta.length !== 16) {
            throw new Error("Número de tarjeta inválido. Debe tener 16 dígitos.");
        } else if (this.emisorTarjeta === "American Express" && this.numeroTarjeta.length !== 15) {
            throw new Error("Número de tarjeta inválido. Debe tener 15 dígitos.");
        }
        this.vencimientoTarjeta = prompt("Ingresa la fecha de vencimiento (MM/YY):");
        this.codigoSeguridad = prompt("Ingresa el código de seguridad:");
        if ((this.emisorTarjeta === "Visa" || this.emisorTarjeta === "Mastercard") && this.codigoSeguridad.length !== 3) {
            throw new Error("Código de seguridad inválido. Debe tener 3 dígitos.");
        } else if (this.emisorTarjeta === "American Express" && this.codigoSeguridad.length !== 4) {
            throw new Error("Código de seguridad inválido. Debe tener 4 dígitos.");
        }
        this.nombreTitular = prompt("Ingresa el nombre del titular:");
    }

    detectarEmisorTarjeta() {
        const numeroTarjetaPrefix = this.numeroTarjeta.slice(0, 1);
        switch (numeroTarjetaPrefix) {
            case "4":
                this.emisorTarjeta = "Visa";
                break;
            case "5":
                this.emisorTarjeta = "Mastercard";
                break;
            case "3":
                this.emisorTarjeta = "American Express";
                break;
            default:
                throw new Error("Emisor de tarjeta no reconocido.");
        }
    }

    solicitarCantidadCuotas() {
        this.cantidadCuotas = parseInt(prompt("Ingresa la cantidad de cuotas (3, 6, 9 o 12)"));

        switch (this.emisorTarjeta) {
            case "Visa":
                this.aplicarInteresVisa();
                break;
            case "Mastercard":
                this.aplicarInteresMastercard();
                break;
            case "American Express":
                this.aplicarInteresAmericanExpress();
                break;
            default:
                break;
        }
    }

    aplicarInteresVisa() {
        if (this.cantidadCuotas === 3 || this.cantidadCuotas === 6) {
            this.interesPorcentaje = 0;
        } else if (this.cantidadCuotas === 9) {
            this.interesPorcentaje = 40;
        } else if (this.cantidadCuotas === 12) {
            this.interesPorcentaje = 110;
        } else {
            throw new Error("Cantidad de cuotas no válida para Visa.");
        }
    }

    aplicarInteresMastercard() {
        this.interesPorcentaje = 25;
    }

    aplicarInteresAmericanExpress() {
        if (this.cantidadCuotas === 3 || this.cantidadCuotas === 6 || this.cantidadCuotas === 9) {
            this.interesPorcentaje = 45;
        } else if (this.cantidadCuotas === 12) {
            this.interesPorcentaje = 0;
        } else {
            throw new Error("Cantidad de cuotas no válida para American Express.");
        }
    }

    calcularIntereses(vuelo) {
        const intereses = (vuelo.idaYVuelta + vuelo.impuestosTotal) * (this.interesPorcentaje / 100);
        const totalConIntereses = vuelo.idaYVuelta + vuelo.impuestosTotal + intereses;

        console.log(`Intereses aplicados: $${intereses}`);
        console.log(`Total a pagar con intereses: $${totalConIntereses}`);
    }
}

module.exports = Pago;
*/

    document.addEventListener('DOMContentLoaded', function() {
        // Obtener el formulario
        var form = document.getElementById('formularioVuelo');

        // Obtener el checkbox de "Acepto términos y condiciones"
        var checkboxTerminos = document.getElementById('terminosCondiciones');

        // Escuchar el evento click del checkbox
        checkboxTerminos.addEventListener('click', function() {
            // Verificar si el checkbox está marcado
            if (checkboxTerminos.checked) {
                // Obtener los valores de los campos del formulario
                var tipoPago = form.querySelector('input[name="tipo_pago"]:checked').value;
                var numeroTarjeta = form.querySelector('#NumeroTarjetaInput').value;
                var codigoSeguridad = form.querySelector('#codigoSeguridadInput').value;
                var vencimientoTarjeta = form.querySelector('#vencimientoTarjetaInput').value;
                var nombreTitular = form.querySelector('#nombreTitularInput').value;

                // Crear un objeto para almacenar los datos del formulario
                var formData = {
                    tipoPago: tipoPago,
                    numeroTarjeta: numeroTarjeta,
                    codigoSeguridad: codigoSeguridad,
                    vencimientoTarjeta: vencimientoTarjeta,
                    nombreTitular: nombreTitular
                };

                // Almacenar los datos del formulario en sessionStorage
                sessionStorage.setItem('formData', JSON.stringify(formData));

                alert('Datos del formulario almacenados en sessionStorage.');
            }
        });
    });


