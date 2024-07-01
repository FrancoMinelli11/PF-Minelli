//Llamado de inputs y formulario

const FORM_INICIAR_SESION = document.getElementById('form-iniciar-sesion');
const INPUT_USUARIO = document.getElementById('user-name');
const INPUT_CONTRASEÑA = document.getElementById('password');

//Funcion para iniciar sesión

FORM_INICIAR_SESION.addEventListener('submit', function(event) {
    event.preventDefault();
    const NOMBRE_DE_USUARIO = INPUT_USUARIO.value;
    const CONTRASEÑA = INPUT_CONTRASEÑA.value;

    if (NOMBRE_DE_USUARIO !== "" && CONTRASEÑA !== "") {

        localStorage.setItem('NOMBRE_DE_USUARIO', NOMBRE_DE_USUARIO);
        localStorage.setItem('CONTRASEÑA', CONTRASEÑA);

        if (NOMBRE_DE_USUARIO === "Francol" && CONTRASEÑA === "admin123") {
            localStorage.setItem('ES_ADMIN', 'true');
        } else {
            localStorage.setItem('ES_ADMIN', 'false');
        }

        window.location.href = "../index.html";
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
