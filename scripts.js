document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos necesarios
    const carrusel = document.querySelector('.mi-carrusel');
    const items = carrusel.querySelectorAll('.carrusel-item');
    const indicadores = carrusel.querySelectorAll('.indicador');
    const btnAnterior = carrusel.querySelector('.carrusel-control-anterior');
    const btnSiguiente = carrusel.querySelector('.carrusel-control-siguiente');

    let indiceActual = 0;
    let autoplayInterval; // Variable para almacenar el ID del temporizador

    // Función para mostrar la diapositiva en un índice específico
    function mostrarDiapositiva(index) {
        items.forEach(item => item.classList.remove('activo'));
        items[index].classList.add('activo');

        indicadores.forEach(indicador => indicador.classList.remove('activo'));
        indicadores[index].classList.add('activo');
    }

    // Función para pasar a la siguiente diapositiva
    function siguienteDiapositiva() {
        indiceActual = (indiceActual + 1) % items.length;
        mostrarDiapositiva(indiceActual);
    }
    
    // Inicia el avance automático cada 10 segundos (10000 ms)
    function iniciarAutoplay() {
        autoplayInterval = setInterval(siguienteDiapositiva, 10000);
    }
    
    // Detiene el avance automático
    function detenerAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Navegación manual: detiene y reinicia el temporizador
    btnSiguiente.addEventListener('click', () => {
        detenerAutoplay();
        siguienteDiapositiva();
        iniciarAutoplay();
    });

    btnAnterior.addEventListener('click', () => {
        detenerAutoplay();
        indiceActual = (indiceActual - 1 + items.length) % items.length;
        mostrarDiapositiva(indiceActual);
        iniciarAutoplay();
    });

    // Navegación con los indicadores: detiene y reinicia el temporizador
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            detenerAutoplay();
            indiceActual = index;
            mostrarDiapositiva(indiceActual);
            iniciarAutoplay();
        });
    });

    // Pausa el avance automático cuando el cursor está sobre el carrusel
    carrusel.addEventListener('mouseenter', detenerAutoplay);
    // Reinicia el avance automático cuando el cursor sale del carrusel
    carrusel.addEventListener('mouseleave', iniciarAutoplay);

    // Muestra la primera diapositiva y arranca el temporizador al cargar la página
    mostrarDiapositiva(indiceActual);
    iniciarAutoplay();
});