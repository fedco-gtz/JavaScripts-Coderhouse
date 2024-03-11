// |--------------------------------------------------|
// | Código que muestra una promoción los días jueves |
// |--------------------------------------------------|
function timeLeft() {
    const NOW = new Date(); //Se puede cargar una fecha manual para verificar el código ejemplo "2024-2-8"
    const DAYWEEK = NOW.getDay();
    if (DAYWEEK === 4) {
        document.getElementById("countdown").innerHTML = `Aprovechá un <strong>20% OFF</strong> + <strong>12 cuotas sin interés</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span class="fa fa-clock-o"></span> POR TIEMPO LIMITADO <span class="fa fa-clock-o"></span>`;
        document.getElementById("countdown").classList.add("show");
    } else {
        document.getElementById("countdown").classList.remove("show");
    };
};

// |----------------------------------------------------|
// |   Código que hace dinamico el formulario de pago   |
// |----------------------------------------------------|
document.addEventListener("DOMContentLoaded", function () {
    const tarjetaDebitoInput = document.getElementById("tarjetaDebito");
    const tarjetaCreditoInput = document.getElementById("tarjetaCredito");
    const tarjetaCreditoRow = document.getElementById("tarjetaCreditoRow");
    const checkboxTerminos = document.getElementById("checkboxTerminos");
    tarjetaDebitoInput.addEventListener("change", function () {
        tarjetaCreditoRow.style.display = "none";
        checkboxTerminos.style.display = "block";
    });

    tarjetaCreditoInput.addEventListener("change", function () {
        tarjetaCreditoRow.style.display = "block";
        checkboxTerminos.style.display = "none";
    });
});

// |-------------------------------------------------|
// | Código que hace dinamicas las metricas del HTML |
// |-------------------------------------------------|
let cantidadElementos = destino.length;
document.getElementById("cantidadElementos").innerHTML = cantidadElementos;
timeLeft();
actualizarVisibilidad();
