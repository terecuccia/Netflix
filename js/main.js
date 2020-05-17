const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


// EVENT LISTENER FLECHADERECHA
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActive = document.querySelector('.indicadores .active');
    if (indicadorActive.nextSibling) {
        indicadorActive.nextSibling.classList.add('active');
        indicadorActive.classList.remove('active');
    }

});

// EVENT LISTENER FLECHAIZQUIERDA
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActive = document.querySelector('.indicadores .active');
    if (indicadorActive.previousSibling) {
        indicadorActive.previousSibling.classList.add('active');
        indicadorActive.classList.remove('active');
    }
});

//PAGINACION
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {


    const indicador = document.createElement('button');
    if (i == 0) {
        indicador.classList.add('active');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active');
    });

}


//HOVER
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})