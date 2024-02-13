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


timeLeft();
