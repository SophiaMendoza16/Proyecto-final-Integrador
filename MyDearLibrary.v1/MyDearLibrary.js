/* ==========================================
   MYDEARLIBRARY V1
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

    // Usuario y contraseña sencillos para la V1
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
   MENÚ
========================================== */

function mostrarMenu(seccion) {

    // Ocultar todas las secciones
    document.querySelectorAll(".seccion").forEach(function(elemento) {

        elemento.classList.add("oculto");

    });


    // Mostrar la sección seleccionada
    document.getElementById(seccion).classList.remove("oculto");


    // Si se selecciona "libros",
    // actualizamos la lista
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

    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";

}


/* ==========================================
   AGREGAR LIBRO
========================================== */

document.getElementById("formularioLibro").addEventListener("submit", function(event) {

    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anio = document.getElementById("anio").value;

    const mensaje = document.getElementById("mensajeLibro");


    // Crear objeto libro
    const libro = {

        titulo: titulo,
        autor: autor,
        anio: anio

    };


    // Agregar libro a la lista
    libros.push(libro);


    // Mostrar mensaje
    mensaje.textContent = "Libro registrado correctamente.";


    // Limpiar formulario
    document.getElementById("formularioLibro").reset();


    // Actualizar contador
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