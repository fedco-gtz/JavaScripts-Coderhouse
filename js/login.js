// |------------------------------------------------|
// |     Código que simula el inicio de sesión      |
// |------------------------------------------------|
document.addEventListener("DOMContentLoaded", function() {
  var username = localStorage.getItem('username');
  if (username) {
    showWelcomeMessage(username);
  } else {
    document.getElementById("loginPopup").style.display = "block";
  }
});

function closeLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
}

function showWelcomeMessage(username) {
  var welcomeDiv = document.getElementById("welcomeMessage");
  welcomeDiv.innerHTML = `<b>${username.toUpperCase()}</b>, HOLA DE NUEVO  |  <button onclick="cerrarSesion()">CERRAR SESIÓN</button>`;
  welcomeDiv.style.display = "block";
  localStorage.setItem('username', username);
  window.location.href = "../index.html";
}

function showUserNotFoundMessage() {
  var userNotFoundDiv = document.getElementById("userNotFoundMessage");
  userNotFoundDiv.style.display = "block";
}

function showUserNotFoundGoogle() {
  var userNotFoundGoogleDiv = document.getElementById("userNotFoundGoogle");
  if (userNotFoundGoogleDiv) {
    userNotFoundGoogleDiv.style.display = "block";
  }
}

function login() {
  var username = document.getElementById("username").value;

  fetch('https://09cf195c04ea43a6b52f65caee85d0c7.api.mockbin.io/')
    .then(response => response.json())
    .then(users => {
      var foundUser = users.find(user => user.username === username);
      if (foundUser) {
        closeLoginPopup();
        showWelcomeMessage(foundUser.name);
      } else {
        showUserNotFoundMessage();
      }
    })
    .catch(error => console.error('Error al obtener usuario:', error));
}

function loginWithGmail() {
  showUserNotFoundGoogle();
}

function cerrarSesion() {
  localStorage.removeItem('username');
  window.location.href = "../sesion.html";
}