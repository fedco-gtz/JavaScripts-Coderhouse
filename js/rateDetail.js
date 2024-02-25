// |--------------------------------------------------|
// |      Código que genera el popup en pay.html      |
// |--------------------------------------------------|
document.getElementById("mostrarPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
  document.getElementById("detalle").innerHTML =
  `Pasaje de ida: $ ${VUELO.totalIda}<br>
  Pasaje de vuelta: $ ${(VUELO.idaYVuelta - VUELO.totalIda)}<br>
  Impuestos y tasas: $ ${VUELO.impuestosTotal}<br>
  ___________________________________<br>
  <strong>TARIFA TOTAL: $ ${VUELO.totalIda + VUELO.impuestosTotal}</strong>`;
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target == this) {
    this.style.display = "none";
  }
});

