const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleLogin);

function handleLogin(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
  
    // Send the form data to a server-side script for authentication
    // For example, using fetch:
    fetch('/api/login', {
      method: 'POST',
      body: new URLSearchParams(formData),
    })
    .then(response => {
      if (response.ok) {
        // Authentication successful, show a success message
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: `Hola, ${username}`,
        });
        // Close the modal
        $('#loginModal').modal('hide');
      } else {
        // Authentication failed, show an error message
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
        });
      }
    });
  }