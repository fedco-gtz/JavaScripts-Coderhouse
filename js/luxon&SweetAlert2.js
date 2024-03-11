// |----------------------------------------------------------------------------------------------|
// | Código que hace dinamico el formulario de busqueda, se aplica libreria Luxon y Sweet Alert 2 |
// |----------------------------------------------------------------------------------------------|
const TIPOVUELO = document.getElementsByName('tipo_vuelo');
const FECHAREGRESOROW = document.getElementById('fechaRegresoRow');
const CHECKBOXNOFECHAROW = document.getElementById('checkboxNoFechaRow');

const actualizarVisibilidad = () => {
    FECHAREGRESOROW.style.display = TIPOVUELO[1].checked ? 'block' : 'none';
    CHECKBOXNOFECHAROW.style.display = TIPOVUELO[1].checked ? 'none' : 'block';
};

const validarFechas = () => {
    const fechaInput = document.getElementById('fecha');
    const fechaRegresoInput = document.getElementById('fecha_regreso');

    const now = luxon.DateTime.local();

    const fechaViaje = luxon.DateTime.fromISO(fechaInput.value);

    if (fechaViaje <= now) {
        Swal.fire({
            imageUrl: 'images/pay/Incorrect.png',
            imageWidth: 150,
            imageHeight: 150,
            title: 'ALGO VA MAL ...',
            text: 'La fecha de viaje debe ser mayor que la fecha actual.',
            timer: 4500,
            customClass: {
                title: 'swalFireTitle',
                popup: 'swalFirePopup',
            }
        });
        fechaInput.value = '';
        return;
    }

    if (FECHAREGRESOROW.style.display === 'block') {
        const fechaRegreso = luxon.DateTime.fromISO(fechaRegresoInput.value);

        if (fechaRegreso <= fechaViaje) {
            Swal.fire({
                imageUrl: 'images/pay/Incorrect.png',
                imageWidth: 150,
                imageHeight: 150,
                title: 'ALGO VA MAL ...',
                text: 'La fecha de destino debe ser distinta a la fecha de viaje.',
                timer: 4500,
                customClass: {
                    title: 'swalFireTitle',
                    popup: 'swalFirePopup',
                }
            });
            fechaRegresoInput.value = '';
        }
    }
};

for (let i = 0; i < TIPOVUELO.length; i++) {
    TIPOVUELO[i].addEventListener('change', () => {
        actualizarVisibilidad();
        validarFechas();
    });
};

document.getElementById('fecha').addEventListener('change', validarFechas);
document.getElementById('fecha_regreso').addEventListener('change', validarFechas);