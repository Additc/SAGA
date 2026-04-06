function login() {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {
        alert("¡Bienvenido a SAGA!");
        window.location.href = "miembros.html"; //Como ejemplo de la página que podemos abrir directamente 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
