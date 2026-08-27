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

        return "El título del libro es obligatorio.";

    }

    // Verificar cantidad mínima de caracteres
    if (titulo.length < 2) {

        return "El título debe tener al menos 2 caracteres.";

    }

    return "";

}

function validarAutor(autor) {

    autor = autor.trim();

    // Verificar si está vacío
    if (autor === "") {

        return "El autor del libro es obligatorio.";

    }

    // Verificar cantidad mínima de caracteres
    if (autor.length < 2) {

        return "El autor debe tener al menos 2 caracteres.";

    }

    return "";

}


function validarAnio(anio) {

    const anioActual = new Date().getFullYear();

    const numeroAnio = Number(anio);


    // Verificar si está vacío
    if (anio.trim() === "") {

        return "El año de publicación es obligatorio.";

    }


    // Verificar si es un número
    if (isNaN(numeroAnio)) {

        return "El año debe ser un número.";

    }


    // Verificar que tenga exactamente 4 dígitos
    if (anio.length !== 4) {

        return "El año debe tener 4 dígitos.";

    }


    // Verificar que no sea negativo
    if (numeroAnio < 0) {

        return "El año no puede ser negativo.";

    }


    // Verificar que no sea futuro
    if (numeroAnio > anioActual) {

        return "El año no puede ser posterior al año actual.";

    }


    return "";

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

const errorTitulo = validarTitulo(titulo);

if (errorTitulo !== "") {

    mensaje.textContent = errorTitulo;

    return;

}


const errorAutor = validarAutor(autor);

if (errorAutor !== "") {

    mensaje.textContent = errorAutor;

    return;

}


const errorAnio = validarAnio(anio);

if (errorAnio !== "") {

    mensaje.textContent = errorAnio;

    return;

}

const errorDuplicado = validarDuplicado(titulo, autor, anio);

if (errorDuplicado !== "") {

    mensaje.textContent = errorDuplicado;

    return;

}

/* ==========================================
   VALIDAR LIBRO DUPLICADO
========================================== */

function validarDuplicado(titulo, autor, anio) {

    const libroDuplicado = libros.some(function(libro) {

        return libro.titulo.toLowerCase() === titulo.trim().toLowerCase() &&
               libro.autor.toLowerCase() === autor.trim().toLowerCase() &&
               libro.anio === anio;

    });


    if (libroDuplicado) {

        return "Este libro ya está registrado.";

    }


    return "";

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