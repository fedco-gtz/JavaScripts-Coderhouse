const TIPOVUELO = document.getElementsByName('tipo_vuelo');
const FECHAREGRESOROW = document.getElementById('fechaRegresoRow');
const CHECKBOXNOFECHAROW = document.getElementById('checkboxNoFechaRow');

const actualizarVisibilidad = () => {
    FECHAREGRESOROW.style.display = TIPOVUELO[1].checked ? 'block' : 'none';
    CHECKBOXNOFECHAROW.style.display = TIPOVUELO[1].checked ? 'none' : 'block';
};

for (let i = 0; i < TIPOVUELO.length; i++) {
    TIPOVUELO[i].addEventListener('change', actualizarVisibilidad);
}

actualizarVisibilidad();
