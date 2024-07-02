//Llamado de elementos
const REGISTRO_INICIO = document.getElementById('registro-inicio')
const NAVBAR = document.getElementById('barra-nav')

// Funcion para ir a la página de registro
REGISTRO_INICIO.addEventListener('click', () =>{
    window.location.href = "../pages/registro.html"
})

//Función al cargar la página de inicio
window.onload = function() {
    const NOMBRE_DE_USUARIO = localStorage.getItem('NOMBRE_DE_USUARIO');
    const CONTRASEÑA = localStorage.getItem('CONTRASEÑA');
    const ES_ADMIN = localStorage.getItem('ES_ADMIN');

    if (NOMBRE_DE_USUARIO && CONTRASEÑA) {
        console.log('Nombre de usuario:', NOMBRE_DE_USUARIO);
        console.log('Contraseña:', CONTRASEÑA);
        
        //Si es admin, se añade la sección ADMINISTRADORES en el navbar
        if (ES_ADMIN === 'true' && NAVBAR) {
            const ELEMENTO_LISTA = document.createElement('li');
            ELEMENTO_LISTA.className = 'nav-item';
            ELEMENTO_LISTA.innerHTML = `<a class="nav-link barra-n" href="./Pages/admin.html">Administradores</a>`;
            NAVBAR.appendChild(ELEMENTO_LISTA);
        }
    }

    //Alerta saludando al usuario
    if (!sessionStorage.getItem('alertaMostrada') && NOMBRE_DE_USUARIO) {
        let timerInterval;
Swal.fire({
  html: `<h2>Bienvenido a KayFs ${NOMBRE_DE_USUARIO}</h2>`,
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("Finalizó la alerta");
  }
});
    }
    //Función para saludar una sola vez al usuario en la sesión
    if(NOMBRE_DE_USUARIO){
        sessionStorage.setItem('alertaMostrada', 'true');
    }
}