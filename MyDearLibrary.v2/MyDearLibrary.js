/* ==========================================
   MYDEARLIBRARY V2
========================================== */


/* ==========================================
   VARIABLES
========================================== */

// Lista donde se almacenarán los libros
let libros = [];


/* ==========================================
   INICIO DE SESIÓN
========================================== */

document.getElementById("formularioLogin").addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    const mensaje = document.getElementById("mensajeLogin");


    // Usuario y contraseña sencillos
    if (usuario === "admin" && contrasena === "1234") {

        document.getElementById("login").classList.add("oculto");

        document.getElementById("sistema").classList.remove("oculto");

        mensaje.textContent = "";

        mostrarMenu("inicio");

    } else {

        mensaje.textContent = "Usuario o contraseña incorrectos.";

    }

});


/* ==========================================
   MENÚ DE NAVEGACIÓN
========================================== */

function mostrarMenu(seccion) {

    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(function(elemento) {

        elemento.classList.add("oculto");

    });


    // Mostrar la sección seleccionada
    document.getElementById(seccion).classList.remove("oculto");


    // Si se selecciona "libros",
    // actualizar la lista
    if (seccion === "libros") {

        mostrarLibros();

    }

}


/* ==========================================
   CERRAR SESIÓN
========================================== */

function cerrarSesion() {

    document.getElementById("sistema").classList.add("oculto");

    document.getElementById("login").classList.remove("oculto");


    // Limpiar campos del login
    document.getElementById("usuario").value = "";

    document.getElementById("contrasena").value = "";

}


function validarTitulo(titulo) {

    titulo = titulo.trim();


    // Verificar si está vacío
    if (titulo === "") {

        return false;

    }


    // Verificar que tenga al menos 2 caracteres
    if (titulo.length < 2) {

        return false;

    }


    return true;

}


function validarAutor(autor) {

    autor = autor.trim();


    // Verificar si está vacío
    if (autor === "") {

        return false;

    }


    // Verificar que tenga al menos 2 caracteres
    if (autor.length < 2) {

        return false;

    }


    return true;

}


function validarAnio(anio) {

    const anioActual = new Date().getFullYear();

    // Convertir el valor a número
    const numeroAnio = Number(anio);


    // Verificar si está vacío
    if (anio.trim() === "") {

        return false;

    }


    // Verificar si es un número
    if (isNaN(numeroAnio)) {

        return false;

    }


    // Verificar que tenga exactamente 4 dígitos
    if (anio.length !== 4) {

        return false;

    }


    // Verificar que no sea negativo
    if (numeroAnio < 0) {

        return false;

    }


    // Verificar que no sea un año futuro
    if (numeroAnio > anioActual) {

        return false;

    }


    return true;

}

/* ==========================================
   AGREGAR LIBRO
========================================== */

document.getElementById("formularioLibro").addEventListener("submit", function(event) {

    event.preventDefault();


    // Obtener valores del formulario
    const titulo = document.getElementById("titulo").value;

    const autor = document.getElementById("autor").value;

    const anio = document.getElementById("anio").value;

    const mensaje = document.getElementById("mensajeLibro");


    /* ======================================
       VALIDACIONES
    ====================================== */

    if (!validarTitulo(titulo)) {

        mensaje.textContent = "El título del libro es obligatorio.";

        return;

    }


    if (!validarAutor(autor)) {

        mensaje.textContent = "El autor del libro es obligatorio.";

        return;

    }


    if (!validarAnio(anio)) {

        mensaje.textContent = "Ingresa un año de publicación válido.";

        return;

    }


    /* ======================================
       CREAR LIBRO
    ====================================== */

    const libro = {

        titulo: titulo.trim(),

        autor: autor.trim(),

        anio: anio

    };


    /* ======================================
       GUARDAR LIBRO
    ====================================== */

    libros.push(libro);


    /* ======================================
       MENSAJE DE ÉXITO
    ====================================== */

    mensaje.textContent = "Libro registrado correctamente.";


    /* ======================================
       LIMPIAR FORMULARIO
    ====================================== */

    document.getElementById("formularioLibro").reset();


    /* ======================================
       ACTUALIZAR CONTADOR
    ====================================== */

    actualizarCantidadLibros();

});


/* ==========================================
   MOSTRAR LIBROS
========================================== */

function mostrarLibros() {

    const lista = document.getElementById("listaLibros");


    // Limpiar contenido anterior
    lista.innerHTML = "";


    // Si no existen libros
    if (libros.length === 0) {

        lista.innerHTML = `
            <p>
                Todavía no hay libros registrados.
            </p>
        `;

        return;

    }


    // Recorrer todos los libros
    libros.forEach(function(libro) {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("libro");


        tarjeta.innerHTML = `
            <h3>${libro.titulo}</h3>

            <p>
                <strong>Autor:</strong>
                ${libro.autor}
            </p>

            <p>
                <strong>Año:</strong>
                ${libro.anio}
            </p>
        `;


        lista.appendChild(tarjeta);

    });

}


/* ==========================================
   ACTUALIZAR CANTIDAD DE LIBROS
========================================== */

function actualizarCantidadLibros() {

    document.getElementById("cantidadLibros").textContent = libros.length;

}


/* ==========================================
   INICIO DEL SISTEMA
========================================== */

actualizarCantidadLibros();