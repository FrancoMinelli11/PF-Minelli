//Llamado de elementos
const REGISTRO_INICIO = document.getElementById('registro-inicio')
const NAVBAR = document.getElementById('barra-nav')

// Funciones
REGISTRO_INICIO.addEventListener('click', () =>{
    window.location.href = "../pages/registro.html"
})

window.onload = function() {
    const NOMBRE_DE_USUARIO = localStorage.getItem('NOMBRE_DE_USUARIO');
    const CONTRASEÑA = localStorage.getItem('CONTRASEÑA');
    const ES_ADMIN = localStorage.getItem('ES_ADMIN');

    if (NOMBRE_DE_USUARIO && CONTRASEÑA) {
        console.log('Nombre de usuario:', NOMBRE_DE_USUARIO);
        console.log('Contraseña:', CONTRASEÑA); 
        if (ES_ADMIN === 'true' && NAVBAR) {
            const ELEMENTO_LISTA = document.createElement('li');
            ELEMENTO_LISTA.className = 'nav-item';
            ELEMENTO_LISTA.innerHTML = `<a class="nav-link barra-n" href="./Pages/admin.html">Administradores</a>`;
            NAVBAR.appendChild(ELEMENTO_LISTA);
        }
    }
};