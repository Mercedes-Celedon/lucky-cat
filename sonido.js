
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('slide');
    const audio = document.getElementById('audio');
    audio.play();
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

//usamos el DOMContentLoaded para asegurarse de que el DOM esté completamente cargado antes de ejecutar el código.
//El evento change es el más apropiado para manejar los cambios en el estado del checkbox de manera efectiva.