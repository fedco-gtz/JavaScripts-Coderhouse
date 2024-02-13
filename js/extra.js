// |--------------------------------------------------|
// | Código que muestra una promoción los días jueves |
// |--------------------------------------------------|

function timeLeft() {
    const NOW = new Date("2024-2-8"); //Se puede cargar una fecha manual para verificar el código ejemplo "2024-2-8"
    const DAYWEEK = NOW.getDay();

    if (DAYWEEK === 4) {
        document.getElementById("countdown").innerHTML = `Aprovechá un <strong>20% OFF</strong> + <strong>12 cuotas sin interés</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span class="fa fa-clock-o"></span> POR TIEMPO LIMITADO <span class="fa fa-clock-o"></span>`;
        document.getElementById("countdown").classList.add("show");
    } else {
        document.getElementById("countdown").classList.remove("show");
    }
}

// |----------------------------------------------------|
// | Código que hace dinamico el formulario de busqueda |
// |----------------------------------------------------|

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

// |-------------------------------------------------|
// | Código que hace dinamicas las metricas del HTML |
// |-------------------------------------------------|

let cantidadElementos = destino.length;

document.getElementById("cantidadElementos").innerHTML = cantidadElementos;

timeLeft();
actualizarVisibilidad();

