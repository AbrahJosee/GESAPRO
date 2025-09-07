document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.mi-carrusel');
    const items = carrusel.querySelectorAll('.carrusel-item');
    const indicadores = carrusel.querySelectorAll('.indicador');
    const btnAnterior = carrusel.querySelector('.carrusel-control-anterior');
    const btnSiguiente = carrusel.querySelector('.carrusel-control-siguiente');

    let indiceActual = 0;

    function mostrarDiapositiva(index) {
        // Oculta todas las diapositivas
        items.forEach(item => item.classList.remove('activo'));
        // Muestra la diapositiva actual
        items[index].classList.add('activo');

        // Actualiza los indicadores
        indicadores.forEach(indicador => indicador.classList.remove('activo'));
        indicadores[index].classList.add('activo');
    }

    btnSiguiente.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % items.length;
        mostrarDiapositiva(indiceActual);
    });

    btnAnterior.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + items.length) % items.length;
        mostrarDiapositiva(indiceActual);
    });

    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            indiceActual = index;
            mostrarDiapositiva(indiceActual);
        });
    });

    // Muestra la primera diapositiva al cargar la página
    mostrarDiapositiva(indiceActual);
});