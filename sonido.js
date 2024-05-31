const slideContainer = document.getElementById("slide-container");
slideContainer.classList.add("color");
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("slide");
  const audio = document.getElementById("audio");
  //audio.play();
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      audio.play();
      slideContainer.classList.add("color");
    } else {
      audio.pause();
      slideContainer.classList.add("color-off");
    }
  });
});

var catAudio = new Audio("./sounds/sound-cat-brr.mp3");
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
