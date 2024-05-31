
const slideContainer = document.getElementById('slide-container')
slideContainer.classList.add('color')
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('slide');
    const audio = document.getElementById('audio');
    audio.play();
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            audio.play();
            slideContainer.classList.remove('color-off')
        } else {
            audio.pause();
            slideContainer.classList.add('color-off')
        }
    });
});

//usamos el DOMContentLoaded para asegurarse de que el DOM esté completamente cargado antes de ejecutar el código.
//El evento change es el más apropiado para manejar los cambios en el estado del checkbox de manera efectiva.
