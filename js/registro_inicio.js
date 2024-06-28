//Llamado de elementos
const REGISTRO_INICIO = document.getElementById('registro-inicio')

//Funciones

REGISTRO_INICIO.addEventListener('click', () => {
    swal.fire({
        title: 'Bienvenido a KayFs, ingresa para comprar con tus datos más facilmente',
        html:`<button class="boton-popup mb-2" id="registro">Registrarse</button> <br>
              <button class="boton-popup" id="inicio">Iniciar sesión</button>`,
        showConfirmButton: false,
    })
})