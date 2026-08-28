import matplotlib.pyplot as plt


# ==========================================
# FUNCIÓN DE REGRESIÓN LINEAL
# ==========================================

def predecir_libros_futuros(meses_historicos, libros_historicos, meses_a_predecir=3):

    # ------------------------------------------
    # VALIDACIONES
    # ------------------------------------------

    # 1. Verificar que las listas no estén vacías
    if not meses_historicos or not libros_historicos:
        return "Error: Las listas de datos históricos no pueden estar vacías."

    # 2. Verificar que ambas listas tengan la misma cantidad de datos
    if len(meses_historicos) != len(libros_historicos):
        return "Error: La cantidad de meses y la cantidad de registros de libros deben coincidir."

    # 3. Se necesitan al menos 2 puntos
    if len(meses_historicos) < 2:
        return "Error: Se necesitan al menos 2 meses de datos históricos para calcular la tendencia."

    # 4. Validar que el tiempo a predecir sea positivo
    if meses_a_predecir <= 0:
        return "Error: El número de meses a predecir debe ser mayor a 0."


    # ------------------------------------------
    # CÁLCULO DE LA REGRESIÓN LINEAL
    # ------------------------------------------

    n = len(meses_historicos)

    sum_x = sum(meses_historicos)

    sum_y = sum(libros_historicos)

    sum_xy = sum(
        x * y
        for x, y in zip(meses_historicos, libros_historicos)
    )

    sum_x2 = sum(
        x ** 2
        for x in meses_historicos
    )


    # Denominador de la fórmula
    denominador = (n * sum_x2) - (sum_x ** 2)


    # Evitar división entre cero
    if denominador == 0:
        return "Error: Los datos introducidos no permiten calcular una pendiente válida."


    # ------------------------------------------
    # CALCULAR PENDIENTE E INTERSECCIÓN
    # ------------------------------------------

    # Pendiente
    m = (
        (n * sum_xy) - (sum_x * sum_y)
    ) / denominador


    # Intersección
    b = (
        sum_y - (m * sum_x)
    ) / n


    # ------------------------------------------
    # PREDICCIONES
    # ------------------------------------------

    ultimo_mes = meses_historicos[-1]

    predicciones = {}


    for i in range(1, meses_a_predecir + 1):

        mes_futuro = ultimo_mes + i

        # Modelo:
        # y = mx + b

        estimacion = (m * mes_futuro) + b


        # No permitir cantidades negativas
        if estimacion < 0:

            predicciones[f"Mes {mes_futuro}"] = 0

        else:

            predicciones[f"Mes {mes_futuro}"] = round(estimacion)


    return predicciones, m, b



# ==========================================
# DATOS DE PRUEBA
# ==========================================

# Histórico de los últimos 6 meses

meses = [
    1,
    2,
    3,
    4,
    5,
    6
]


libros_registrados = [
    120,
    150,
    175,
    210,
    240,
    270
]


# ==========================================
# EJECUTAR MODELO
# ==========================================

resultado = predecir_libros_futuros(
    meses,
    libros_registrados,
    meses_a_predecir=3
)


# ==========================================
# MOSTRAR RESULTADOS
# ==========================================

if isinstance(resultado, tuple):

    predicciones, pendiente, interseccion = resultado


    print()
    print("==========================================")
    print("       MODELO DE REGRESIÓN LINEAL")
    print("==========================================")

    print()

    print(
        f"Ecuación: y = {pendiente:.2f}x + {interseccion:.2f}"
    )


    print()
    print("------------------------------------------")
    print("PREDICCIÓN PARA LOS PRÓXIMOS 3 MESES")
    print("------------------------------------------")


    for mes, cantidad in predicciones.items():

        print(
            f"{mes}: aproximadamente {cantidad} libros"
        )


    # ==========================================
    # GRÁFICA
    # ==========================================

    # Crear meses del 1 al 9
    meses_grafica = list(
        range(
            1,
            len(meses) + 4
        )
    )


    # Calcular los valores de la línea
    libros_grafica = []


    for mes in meses_grafica:

        valor = (
            pendiente * mes
        ) + interseccion

        libros_grafica.append(valor)


    # ==========================================
    # CREAR GRÁFICA
    # ==========================================

    plt.figure(
        figsize=(10, 6)
    )


    # ------------------------------------------
    # DATOS HISTÓRICOS
    # ------------------------------------------

    plt.scatter(
        meses,
        libros_registrados,
        s=80,
        label="Datos históricos"
    )


    # ------------------------------------------
    # LÍNEA DE REGRESIÓN
    # ------------------------------------------

    plt.plot(
        meses_grafica,
        libros_grafica,
        linewidth=2,
        label="Regresión lineal"
    )


    # ------------------------------------------
    # PREDICCIONES
    # ------------------------------------------

    meses_prediccion = [
        7,
        8,
        9
    ]


    valores_prediccion = []


    for mes in meses_prediccion:

        valor = (
            pendiente * mes
        ) + interseccion

        valores_prediccion.append(valor)


    plt.scatter(
        meses_prediccion,
        valores_prediccion,
        marker="x",
        s=100,
        linewidth=2,
        label="Predicciones"
    )


    # ==========================================
    # INFORMACIÓN DE LA GRÁFICA
    # ==========================================

    plt.title(
        "Regresión Lineal - MyDearLibrary"
    )


    plt.xlabel(
        "Mes"
    )


    plt.ylabel(
        "Cantidad de libros registrados"
    )


    plt.xticks(
        range(1, 10)
    )


    plt.grid(
        True,
        alpha=0.3
    )


    plt.legend()


    # Mostrar gráfica
    plt.show()


else:

    print()
    print(resultado)