window.onload = function() {
    if (!localStorage.getItem('executed')) {
        localStorage.setItem('executed', 'true');
        window.location.href = "./pages/sesion.html";
    }
};