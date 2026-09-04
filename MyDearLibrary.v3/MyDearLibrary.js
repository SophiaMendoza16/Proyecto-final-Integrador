/* ==========================================
   MYDEARLIBRARY V3
========================================== */


/* ==========================================
   VARIABLES
========================================== */

// Usuarios disponibles
const usuarios = {
    Angie: "1234",
    Johan: "1234",
    Daniel: "1234"
};

// Usuario que inició sesión
let usuarioActual = "";

// Bibliotecas de cada usuario
let bibliotecas = JSON.parse(
    localStorage.getItem("bibliotecas")
) || {};

/* ==========================================
   LIBROS INICIALES
========================================== */

const librosIniciales = {

    Angie: [
        { titulo: "El Hobbit", autor: "J.R.R. Tolkien", anio: "1937" },
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: "1967" },
        { titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: "1813" },
        { titulo: "Frankenstein", autor: "Mary Shelley", anio: "1818" },
        { titulo: "Drácula", autor: "Bram Stoker", anio: "1897" },
        { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: "1943" },
        { titulo: "Alicia en el país de las maravillas", autor: "Lewis Carroll", anio: "1865" },
        { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: "1605" },
        { titulo: "Jane Eyre", autor: "Charlotte Brontë", anio: "1847" },
        { titulo: "Mujercitas", autor: "Louisa May Alcott", anio: "1868" },
        { titulo: "La isla del tesoro", autor: "Robert Louis Stevenson", anio: "1883" },
        { titulo: "Peter Pan", autor: "J. M. Barrie", anio: "1911" },
        { titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", anio: "1890" },
        { titulo: "La Odisea", autor: "Homero", anio: "700" },
        { titulo: "Romeo y Julieta", autor: "William Shakespeare", anio: "1597" },
        { titulo: "El viejo y el mar", autor: "Ernest Hemingway", anio: "1952" },
        { titulo: "Viaje al centro de la Tierra", autor: "Julio Verne", anio: "1864" },
        { titulo: "La máquina del tiempo", autor: "H. G. Wells", anio: "1895" },
        { titulo: "Las aventuras de Tom Sawyer", autor: "Mark Twain", anio: "1876" },
        { titulo: "Moby-Dick", autor: "Herman Melville", anio: "1851" }
    ],

    Johan: [
        { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", anio: "1954" },
        { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", anio: "1997" },
        { titulo: "Harry Potter y la cámara secreta", autor: "J.K. Rowling", anio: "1998" },
        { titulo: "El código Da Vinci", autor: "Dan Brown", anio: "2003" },
        { titulo: "Los juegos del hambre", autor: "Suzanne Collins", anio: "2008" },
        { titulo: "Divergente", autor: "Veronica Roth", anio: "2011" },
        { titulo: "It", autor: "Stephen King", anio: "1986" },
        { titulo: "Carrie", autor: "Stephen King", anio: "1974" },
        { titulo: "El resplandor", autor: "Stephen King", anio: "1977" },
        { titulo: "1984", autor: "George Orwell", anio: "1949" },
        { titulo: "Rebelión en la granja", autor: "George Orwell", anio: "1945" },
        { titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: "1953" },
        { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", anio: "1981" },
        { titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", anio: "1985" },
        { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", anio: "2001" },
        { titulo: "El alquimista", autor: "Paulo Coelho", anio: "1988" },
        { titulo: "Sapiens", autor: "Yuval Noah Harari", anio: "2011" },
        { titulo: "El nombre del viento", autor: "Patrick Rothfuss", anio: "2007" },
        { titulo: "Dune", autor: "Frank Herbert", anio: "1965" },
        { titulo: "Neuromante", autor: "William Gibson", anio: "1984" }
    ],

    Daniel: [
        { titulo: "La metamorfosis", autor: "Franz Kafka", anio: "1915" },
        { titulo: "El proceso", autor: "Franz Kafka", anio: "1925" },
        { titulo: "La divina comedia", autor: "Dante Alighieri", anio: "1320" },
        { titulo: "Hamlet", autor: "William Shakespeare", anio: "1603" },
        { titulo: "Macbeth", autor: "William Shakespeare", anio: "1606" },
        { titulo: "La Ilíada", autor: "Homero", anio: "700" },
        { titulo: "Robinson Crusoe", autor: "Daniel Defoe", anio: "1719" },
        { titulo: "Los viajes de Gulliver", autor: "Jonathan Swift", anio: "1726" },
        { titulo: "Los miserables", autor: "Victor Hugo", anio: "1862" },
        { titulo: "Nuestra Señora de París", autor: "Victor Hugo", anio: "1831" },
        { titulo: "El conde de Montecristo", autor: "Alexandre Dumas", anio: "1844" },
        { titulo: "Los tres mosqueteros", autor: "Alexandre Dumas", anio: "1844" },
        { titulo: "Guerra y paz", autor: "León Tolstói", anio: "1869" },
        { titulo: "Anna Karénina", autor: "León Tolstói", anio: "1878" },
        { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", anio: "1866" },
        { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", anio: "1925" },
        { titulo: "Ulises", autor: "James Joyce", anio: "1922" },
        { titulo: "El extranjero", autor: "Albert Camus", anio: "1942" },
        { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: "1943" },
        { titulo: "La vuelta al mundo en 80 días", autor: "Julio Verne", anio: "1872" }
    ]

};

/* ==========================================
   INICIALIZAR BIBLIOTECAS
========================================== */

Object.keys(usuarios).forEach(function(usuario) {

    if (!bibliotecas[usuario]) {

        bibliotecas[usuario] = librosIniciales[usuario];

    }

});

localStorage.setItem(
    "bibliotecas",
    JSON.stringify(bibliotecas)
);


/* ==========================================
   GUARDAR LIBROS EN LOCALSTORAGE
========================================== */

function guardarLibros() {

    bibliotecas[usuarioActual] = libros;

    localStorage.setItem(
        "bibliotecas",
        JSON.stringify(bibliotecas)
    );

}

/* ==========================================
   INICIO DE SESIÓN
========================================== */

document.getElementById("formularioLogin").addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value;

    const mensaje = document.getElementById("mensajeLogin");

    // Verificar usuario y contraseña
    if (
        (usuario === "Angie" || usuario === "Johan" || usuario === "Daniel") &&
        contrasena === "1234"
    ) {

        // Guardar el usuario que inició sesión
        usuarioActual = usuario;

        // Cargar la biblioteca correspondiente
        libros = bibliotecas[usuarioActual];

        // Ocultar login y mostrar sistema
        document.getElementById("login").classList.add("oculto");

        document.getElementById("sistema").classList.remove("oculto");

        mensaje.textContent = "";

        // Actualizar contador con los libros del usuario
        actualizarCantidadLibros();

        // Mostrar inicio
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

    guardarLibros();

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
   BUSCAR LIBROS
========================================== */

function buscarLibros() {

    const textoBusqueda = document
        .getElementById("buscarLibro")
        .value
        .toLowerCase()
        .trim();

    const lista = document.getElementById("listaLibros");

    lista.innerHTML = "";

    // Si no hay libros registrados
    if (libros.length === 0) {

        lista.innerHTML = `
            <p>
                Todavía no hay libros registrados.
            </p>
        `;

        return;
    }

    // Filtrar libros
    const resultados = libros.filter(function(libro) {

        return (
            libro.titulo.toLowerCase().includes(textoBusqueda) ||
            libro.autor.toLowerCase().includes(textoBusqueda) ||
            libro.anio.toString().includes(textoBusqueda)
        );

    });

    // Si no existen coincidencias
    if (resultados.length === 0) {

        lista.innerHTML = `
            <p>
                No se encontraron libros.
            </p>
        `;

        return;
    }

    // Mostrar resultados
    resultados.forEach(function(libro) {

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

/* ==========================================
   EVENTO DE BÚSQUEDA
========================================== */

document
    .getElementById("buscarLibro")
    .addEventListener("input", buscarLibros);

    /* ==========================================
   REGRESIÓN LINEAL
========================================== */

function calcularRegresionLineal() {

    // Datos históricos de ejemplo
    const mesesHistoricos = [
        1,
        2,
        3,
        4,
        5,
        6
    ];

    const librosHistoricos = [
        120,
        150,
        175,
        210,
        240,
        270
    ];


    // Verificar cantidad de datos
    if (mesesHistoricos.length !== librosHistoricos.length) {

        return;

    }


    const n = mesesHistoricos.length;


    // Sumas necesarias
    const sumX = mesesHistoricos.reduce(
        (total, valor) => total + valor,
        0
    );


    const sumY = librosHistoricos.reduce(
        (total, valor) => total + valor,
        0
    );


    const sumXY = mesesHistoricos.reduce(
        (total, x, indice) =>
            total + (x * librosHistoricos[indice]),
        0
    );


    const sumX2 = mesesHistoricos.reduce(
        (total, x) =>
            total + (x ** 2),
        0
    );


    // Denominador
    const denominador =
        (n * sumX2) - (sumX ** 2);


    if (denominador === 0) {

        document.getElementById(
            "ecuacionRegresion"
        ).textContent =
            "No es posible calcular la regresión.";

        return;

    }


    // Pendiente
    const pendiente =
        ((n * sumXY) - (sumX * sumY))
        / denominador;


    // Intersección
    const interseccion =
        (sumY - (pendiente * sumX))
        / n;


    // Mostrar ecuación
    document.getElementById(
        "ecuacionRegresion"
    ).textContent =
        `Modelo: y = ${pendiente.toFixed(2)}x + ${interseccion.toFixed(2)}`;


    // Tabla
    const tabla =
        document.getElementById("tablaRegresion");


    tabla.innerHTML = "";


    // ==========================================
    // DATOS HISTÓRICOS
    // ==========================================

    mesesHistoricos.forEach(function(mes, indice) {

        const fila =
            document.createElement("tr");


        fila.innerHTML = `
            <td>${mes}</td>

            <td>
                ${librosHistoricos[indice]}
            </td>

            <td>
                Histórico
            </td>
        `;


        tabla.appendChild(fila);

    });


    // ==========================================
    // PREDICCIONES
    // ==========================================

    const ultimoMes =
        mesesHistoricos[mesesHistoricos.length - 1];


    for (let i = 1; i <= 3; i++) {

        const mesFuturo =
            ultimoMes + i;


        let estimacion =
            (pendiente * mesFuturo)
            + interseccion;


        // Evitar cantidades negativas
        if (estimacion < 0) {

            estimacion = 0;

        }


        estimacion =
            Math.round(estimacion);


        const fila =
            document.createElement("tr");


        fila.classList.add("prediccion");


        fila.innerHTML = `
            <td>${mesFuturo}</td>

            <td class="cantidad-prediccion">
                ≈ ${estimacion}
            </td>

            <td>
                Predicción
            </td>
        `;


        tabla.appendChild(fila);

    }

}


/* ==========================================
   EJECUTAR REGRESIÓN
========================================== */

calcularRegresionLineal();