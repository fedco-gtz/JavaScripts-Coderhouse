// |-------------------------------|
// | Código que muestra mis vuelos |
// |-------------------------------|
document.addEventListener("DOMContentLoaded", () => {
    const CODIGORESERVA = localStorage.getItem('codigoReserva');
    const DATOSSELECCIONADOS = localStorage.getItem('datosSeleccionados');
    const USERDATA = localStorage.getItem('userData');

    if (CODIGORESERVA && DATOSSELECCIONADOS && USERDATA) {
        const DATOSSELECCIONADOSOBJ = JSON.parse(DATOSSELECCIONADOS);
        const USERDATAOBJ = JSON.parse(USERDATA);

        const divContent = document.createElement('div');
        divContent.innerHTML = `
        <h4><b>RESERVA ${CODIGORESERVA}</b></h4>
        <h5><b>VUELO</b></h5>
            <ul>
                <li><b>ORIGEN:</b> ${DATOSSELECCIONADOSOBJ.origen} - <b>DESTINO:</b> ${DATOSSELECCIONADOSOBJ.destino}</li>
                <li><b>PASAJEROS:</b> ${DATOSSELECCIONADOSOBJ.cantidadPersonas} - <b>CLASE:</b> ${DATOSSELECCIONADOSOBJ.clase} - <b>TIPO VUELO:</b> ${DATOSSELECCIONADOSOBJ.tipoVuelo.toUpperCase()}</li>
                <li><b>FECHA SALIDA:</b> ${DATOSSELECCIONADOSOBJ.fecha} - <b>FECHA REGRESO:</b> ${DATOSSELECCIONADOSOBJ.fechaRegreso}</li>
                <li><b>HORA SALIDA:</b> ${DATOSSELECCIONADOSOBJ.horaVuelo} - <b>HORA REGRESO:</b> INFORMACIÓN NO DISPONIBLE</li>
            </ul>
            <h5><b>PAGO</b></h5>
            <ul>
            <li>TARJETA <b>${USERDATAOBJ.emisor}</b> TERMINADA EN <b>${USERDATAOBJ.numeroTarjeta.slice(-4)}</b></li>
            <li><b>TIPO DE PAGO:</b> ${USERDATAOBJ.tipoPago.slice(7).toUpperCase()} - <b>CUOTA:</b> ${USERDATAOBJ.cuotasCredito}</li>
        </ul>`;
        document.getElementById('divVisible').appendChild(divContent);
        document.getElementById('divVisible').style.display = 'block';
    } else {
        const divContent = document.createElement('div');
        divContent.innerHTML = `<p> <b>No hay información de vuelos disponible</b> </p>`
        document.getElementById('divVisible').appendChild(divContent);
        document.getElementById('divVisible').style.display = 'block';
    }
});