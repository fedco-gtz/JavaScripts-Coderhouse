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

  fetch('https://jsonplaceholder.typicode.com/users')
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

