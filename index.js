const triggerArea = document.getElementById('triggerArea');

triggerArea.addEventListener('mouseover', () => {
    const intervalId = setInterval(createCorazon, 200);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 3000);
});

function createCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');

    // Obtener el ancho y alto del viewport
    const viewportWidth = window.innerWidth - 50;
    const viewportHeight = window.innerHeight - 50;

    // Calcular coordenadas aleatorias dentro del viewport
    const x = Math.random() * viewportWidth;
    const y = Math.random() * viewportHeight;

    corazon.style.left = `${x}px`;
    corazon.style.top = `${y}px`;

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 1000);
}
