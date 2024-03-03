
/*
/ Obtener los datos del localStorage
let datosSeleccionados = JSON.parse(localStorage.getItem('datosSeleccionados')) || [];
let userData = JSON.parse(localStorage.getItem('userData')) || [];
let codigoReserva = localStorage.getItem('codigoReserva') || '';

// Almacenar el código de reserva en un array
let codigosReserva = [];
if (codigoReserva !== '') {
    codigosReserva.push(codigoReserva);
}

// Limpiar el localStorage
localStorage.removeItem('datosSeleccionados');
localStorage.removeItem('userData');
localStorage.removeItem('codigoReserva');

// Ahora los datos están en tres arrays distintas y el localStorage está limpio
console.log(datosSeleccionados);
console.log(userData);
console.log(codigosReserva);

*/
// Obtener los datos del localStorage
let datosSeleccionados = JSON.parse(localStorage.getItem('datosSeleccionados')) || [];
let userData = JSON.parse(localStorage.getItem('userData')) || [];
let codigoReserva = localStorage.getItem('codigoReserva') || '';

// Almacenar el código de reserva en un array
let codigosReserva = codigoReserva !== '' ? [codigoReserva] : [];

// Limpiar el localStorage
localStorage.removeItem('datosSeleccionados');
localStorage.removeItem('userData');
localStorage.removeItem('codigoReserva');

// Ahora los datos están en tres arrays distintas y el localStorage está limpio
console.log(datosSeleccionados);
console.log(userData);
console.log(codigosReserva);


