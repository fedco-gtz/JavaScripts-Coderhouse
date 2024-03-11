// |----------------------------------------------------------|
// |     Código que muestra el usuario y cierre de sesión     |
// |----------------------------------------------------------|
let username = localStorage.getItem('username');
if (username) {
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('welcomeMessage').innerHTML = `<b>${username.toUpperCase()}</b>, HOLA DE NUEVO  |  <button onclick="cerrarSesion()">CERRAR SESIÓN</button>`;
};

function cerrarSesion() {
    localStorage.clear();
    let currentPagePath = window.location.pathname;
    if (currentPagePath.endsWith('index.html')) {
        window.location.href = 'index.html';
    } else {
        window.location.href = '../index.html';
    }
};