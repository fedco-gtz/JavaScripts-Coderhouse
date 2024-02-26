// |--------------------------------------------------|
// |      Código que genera el popup en pay.html      |
// |--------------------------------------------------|
document.getElementById("mostrarPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
  document.getElementById("detalle").innerHTML =
  `Pasaje de ida: $ ${VUELO.precioDestino.toFixed(2)}<br>
  Pasaje de vuelta: $ ${VUELO.precioIda.toFixed(2) - VUELO.precioDestino.toFixed(2)}<br>
  Impuestos y tasas: $ ${VUELO.impuestosTotal}<br>
  ___________________________________<br>
  <strong>TARIFA TOTAL: $ ${VUELO.precioTotalPasaje().toFixed(2)}</strong>`;
});

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target == this) {
    this.style.display = "none";
  }
});

