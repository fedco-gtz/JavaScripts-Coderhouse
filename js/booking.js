// Inicializar un array para almacenar los datos
let arrayDatos = [];

// Verificar si hay datos en localStorage
if(localStorage.getItem('datosSeleccionados')) {
    // Obtener los datos del localStorage y convertirlos de nuevo a un array
    const datosLocalStorage = JSON.parse(localStorage.getItem('datosSeleccionados'));
    
    // Agregar los datos obtenidos del localStorage al array
    arrayDatos = arrayDatos.concat(datosLocalStorage);
}

console.log(arrayDatos);