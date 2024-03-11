// |---------------------------------------------------------------------------------------------------|
// |     Código nos transfiere de index.html a sesión.html para llevar adelante el inicio de sesión    |
// |---------------------------------------------------------------------------------------------------|
window.onload = function() {
    if (!localStorage.getItem('executed')) {
        localStorage.setItem('executed', 'true');
        window.location.href = "./pages/sesion.html";
    }
};