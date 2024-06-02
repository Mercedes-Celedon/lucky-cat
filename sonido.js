document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.getElementById("slide-container");
  const checkbox = document.getElementById("slide");
  const audio = document.getElementById("audio");


  // Escuchar cambios en el checkbox para pausar o reproducir el audio
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      audio.pause();
      slideContainer.classList.remove("color");
      slideContainer.classList.add("color-off");
    } else {
      audio.play().catch(error => {
        console.log("La reproducción del audio fue impedida:", error);
      });
      slideContainer.classList.remove("color-off");
      slideContainer.classList.add("color");
    }
  });
});

//Efecto de sonido al pasar el mouse por la cara del gato 
let catAudio = new Audio("./sounds/sound-cat-brr.mp3");
const catFace = document.querySelector(".cat-head");

catFace.addEventListener("mouseover", function () {
  catAudio.play();
});
catFace.addEventListener("mouseout", function () {
  catAudio.pause();
  catAudio.currentTime = 0;
});


//usamos el DOMContentLoaded para asegurarse de que el DOM esté completamente cargado antes de ejecutar el código.

//El evento change es el más apropiado para manejar los cambios en el estado del checkbox de manera efectiva.
