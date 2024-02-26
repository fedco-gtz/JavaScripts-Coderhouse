// |----------------------------------------------|
// |     Código que simula el pago del pasaje     |
// |----------------------------------------------|
let codigosReserva = [];
console.log(codigosReserva)

function generarCodigo() {
    let codigo = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

function reiniciar() {
    document.getElementById('popupPay').style.display = 'none';
    document.querySelector('.spinner').style.display = 'none';
    document.querySelector('.close').style.display = 'none';
    document.getElementById('mensaje').innerText = '';
    document.getElementById('mensaje').classList.remove('error');
    document.querySelector('.checkmark').style.display = 'none';
    document.querySelector('.checkerror').style.display = 'none';
    document.getElementById('codigoExitoso').innerText = '';
}

document.getElementById('pagarButton').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('popupPay').style.display = 'block';
    document.querySelector('.spinner').style.display = 'block';
    document.getElementById('mensaje').innerText = "PROCESANDO PAGO ...";
    document.getElementById('mensaje').classList.add('process');
    document.querySelector('.close').style.display = 'block';

    let randomNumber = Math.random();

    setTimeout(() => {
        (randomNumber > 0.5) ? (
            document.querySelector('.checkmark').style.display = 'block',
            document.getElementById('mensaje').innerText = "PAGO REALIZADO EXITOSAMENTE",
            document.getElementById('mensaje').classList.add('success'),
            codigosReserva.push(generarCodigo()),
            document.getElementById('codigoExitoso').innerText = `Reserva: ${codigosReserva[codigosReserva.length - 1]}`
        ) : (
            document.querySelector('.checkerror').style.display = 'block',
            document.getElementById('mensaje').innerText = "FONDOS INSUFICIENTES",
            document.getElementById('mensaje').classList.add('error')
        );
        document.querySelector('.spinner').style.display = 'none';
    }, 3000);
});

document.querySelector('.close').addEventListener('click', () => reiniciar());
