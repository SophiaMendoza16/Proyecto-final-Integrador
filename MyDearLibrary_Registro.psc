Algoritmo MyDearLibrary_Registro
	
    Definir titulo, autor Como Caracter
    Definir anio, anioActual Como Entero
    Definir validoTitulo, validoAutor, validoAnio, duplicado Como Logico
	
    anioActual <- 2026
	
    Escribir "================================="
    Escribir "       MyDearLibrary"
    Escribir "      Registro de libro"
    Escribir "================================="
	
    Escribir "Ingrese el titulo del libro:"
    Leer titulo
	
    Escribir "Ingrese el autor del libro:"
    Leer autor
	
    Escribir "Ingrese el año de publicacion:"
    Leer anio
	
    validoTitulo <- Verdadero
    validoAutor <- Verdadero
    validoAnio <- Verdadero
    duplicado <- Falso
	
    // Validar titulo
    Si titulo = "" Entonces
        validoTitulo <- Falso
        Escribir "El titulo del libro es obligatorio."
    SiNo
        Si Longitud(titulo) < 2 Entonces
            validoTitulo <- Falso
            Escribir "El titulo debe tener al menos 2 caracteres."
        FinSi
    FinSi
	
    // Validar autor
    Si autor = "" Entonces
        validoAutor <- Falso
        Escribir "El autor del libro es obligatorio."
    SiNo
        Si Longitud(autor) < 2 Entonces
            validoAutor <- Falso
            Escribir "El autor debe tener al menos 2 caracteres."
        FinSi
    FinSi
	
    // Validar año
    Si anio < 1000 O anio > anioActual Entonces
        validoAnio <- Falso
        Escribir "El año de publicación no es válido."
    FinSi
	
    // Comprobar duplicado
    Si titulo = "El Hobbit" Y autor = "J.R.R. Tolkien" Y anio = 1937 Entonces
        duplicado <- Verdadero
        Escribir "Este libro ya esta registrado."
    FinSi
	
    // Resultado final
    Si validoTitulo Y validoAutor Y validoAnio Y NO duplicado Entonces
		
        Escribir "---------------------------------"
        Escribir "Libro registrado correctamente."
        Escribir "Titulo: ", titulo
        Escribir "Autor: ", autor
        Escribir "Año: ", anio
        Escribir "---------------------------------"
		
    SiNo
		
        Escribir "No se puede registrar el libro."
        Escribir "Revise los datos ingresados."
		
    FinSi
	
FinAlgoritmo
