let playersName = [];

//Esconde el contenedor de las frases
let container = document.getElementById("container");
container.classList.add("hidden-element");

const addNewName = () => {
  if (playersName.length >= 15) {
    swal("Atención", "El límite máximo es de 15 jugadores", "error", {
      button: "Aceptar",
    });
    return;
  }

  //input para agregar nombres
  let name = document.getElementById("names");

  //Ul donde voy a agregar los nombres de los jugadores
  const spanLi = document.createElement("span");
  spanLi.classList.add("span-li");
  let lista = document.getElementById("list_names");
  const li = document.createElement("li");
  if (name.value === "") {
    swal("Atención", "Escribe un nombre", "error", {
      button: "Aceptar",
    });

    return;
  } else {
    spanLi.textContent = name.value;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.addEventListener("click", deleteName);
  const editBtn = document.createElement("button");
  editBtn.classList.add("btn-edit");
  editBtn.addEventListener("click", editName);

  //Consigo el value del input y le hago push al array para almacenar los nombres
  let names = name.value;
  playersName.push(names);
  console.log(playersName);

  //Agrega un atributo al elemento li, después que lo agregamos al array
  li.setAttribute("data-position", playersName.length - 1);

  //Quita el texto con las indiciaciones del juego
  const inicialText = document.getElementById("inicial-text");
  inicialText.classList.add("hidden-element");

  li.appendChild(spanLi);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  lista.appendChild(li);
  name.value = "";
};

//Btn agregar nombres a la lista de jugadores
document.getElementById("button_names").addEventListener("click", addNewName);

let editAll = document.querySelectorAll(".btn-edit");
for (const btn of editAll) {
  btn.addEventListener("click", editName);
}

function deleteName(event) {
  let li = event.target.parentElement;
  let position = li.getAttribute("data-position");
  playersName.splice(position, 1);
  li.remove();
  console.log(playersName);
}

function editName(event) {
  let name = document.getElementById("names");
  let li = event.target.parentElement;
  let position = li.getAttribute("data-position");
  playersName.splice(position, 1);
  let nameInner = li.innerText;
  console.log(nameInner);
  name.value = nameInner;
  console.log(name.textContent);
  li.remove();
}

//Div donde apareceran los jugadores con sus frases de la fortuna
let listaLucky = document.getElementById("container");
let sentences = [
  "La suerte es la capacidad de aprovechar las oportunidades que se presentan.",
  "La buena fortuna es el resultado de decisiones inteligentes tomadas en el momento adecuado.",
  "La buena fortuna es como un invitado; si la invitas, vendrá.",
  "La buena fortuna es la sonrisa del destino.",
  "La suerte es un divino juego de azar.",
  "No cuentes con la suerte, haz que la suerte cuente.",
  "La suerte es la ayuda de la casualidad.",
  "La suerte no es algo que puedas controlar. Puedes solo estar preparado para ello.",
  "La buena fortuna siempre favorece a los valientes",
  "La suerte es el resultado de la suma de todas tus decisiones.",
  "La suerte no es más que el azar de encontrar oportunidades",
  "La suerte es el cruce de la oportunidad con la preparación.",
  "La buena fortuna es el sueño del hombre virtuoso.",
  "La suerte es la residencia de la valentía.",
];

//función para generar oración  aleatoria
const phrases = (max) => {
  return Math.floor(Math.random() * max);
};

// función para agregar esa oración a una lista
const addRandomPhrase = () => {
  //Recorro el array de nombres por cada posición que me de una frase de la fortuna
  if (playersName.length >= 1) {
    for (let index = 0; index < playersName.length; index++) {
      let randomIndex = phrases(sentences.length);
      let randomPhrase = sentences[randomIndex];

      const divMatch = document.createElement("div");
      divMatch.classList.add("container-phrases");
      const nameContainer = document.createElement("div");
      nameContainer.classList.add("name-container");
      const pName = document.createElement("p");
      pName.classList.add("p-name");
      pName.textContent = playersName[index];
      const phraseContainer = document.createElement("div");
      phraseContainer.classList.add("phrase-container");
      const imgFortuna = document.createElement("img");
      imgFortuna.classList.add("img-fortuna");
      imgFortuna.src = "./images/galleta-de-la-fortuna.png";
      const pPhrase = document.createElement("p");
      pPhrase.classList.add("p-phrase");
      pPhrase.textContent = randomPhrase;

      nameContainer.appendChild(pName);
      phraseContainer.appendChild(imgFortuna);
      phraseContainer.appendChild(pPhrase);
      divMatch.appendChild(nameContainer);
      divMatch.appendChild(phraseContainer);
      listaLucky.appendChild(divMatch);
    }

    //Muestra el contenedor de las frases
    let container = document.getElementById("container");
    container.classList.remove("hidden-element");

    //Agrega una clase al div del input, btn y nombres para ocultarlo
    let element = document.querySelector(".cat-main");
    element.classList.add("hidden-element");

    //Mostrar la flecha cuando se hace click boton de Lucky Match" - para retroceder una pantalla en el juego
    let arrow = document.getElementById("back_arrow");
    arrow.classList.add("display-block");

    //Desabilita el boton para que no se pueda seguir jugando
    document.getElementById("lucky_match").disabled = true;

    //Animacion cuando presionamos el botón de Lucky-Match
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis:["🥠", "🥠"], 
      emojiSize: 35,
      confettiNumber: 70
  });

    //Sonido que se reproduce cuando te dan la frase de la suerte
    let luckyAudio = new Audio("./sounds/winner.mp3");
    luckyAudio.play();
  } else {
    swal("Atención", "Debes ingresar nombres para comenzar a jugar","error", {
      button: "Aceptar",
    });
    return;
  }
};

//Con el botón de agregar, agregamos nombres a la lista
document.getElementById("button_names").addEventListener("click", addNewName);

//Con el botón de Lucky Match le damos a cada jugador su frase de la suerte
document
  .getElementById("lucky_match")
  .addEventListener("click", addRandomPhrase);

// Solo letras y espacios permitidos en el input (hay dos posibilidades)
document.getElementById("names").addEventListener("keypress", function (event) {
  if (!/[a-zA-Z\sñÑ]/.test(String.fromCharCode(event.which))) {
    swal("Atención", "Carácter inválido", "error", {
      button: "Aceptar",
    });
    event.preventDefault();
  }
});

// Event listener para la tecla Enter en el input (para que agregue solo con enter sin pulsar)
document.getElementById("names").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNewName();
  }
});

//Botón de flecha que vuelve al listado de nombres
function reverse() {
  let element = document.querySelector(".cat-main");
  element.classList.remove("hidden-element");
  let container = document.getElementById("container");
  container.innerHTML = "";
  container.classList.add("hidden-element");
  document.getElementById("lucky_match").disabled = false;
  let arrow = document.getElementById("back_arrow");
  arrow.classList.remove("display-block");
}

document.getElementById("back_arrow").addEventListener("click", reverse);

let lista = document.getElementById("list_names");

const resetAll = () => {
  //Borra el contenido del ul
  listaLucky.innerHTML = "";
  lista.innerHTML = "";
  //Vacía el array de los nombres de jugadores
  playersName.length = 0;
  //Debe volver a mostrar el input y el btn agregar
  let element = document.querySelector(".cat-main");
  element.classList.remove("hidden-element");
  //Vuelve a ocultar el botón de la flecha
  let arrow = document.getElementById("back_arrow");
  arrow.classList.remove("display-block");
  //Habilita el btn de Lucky Match
  document.getElementById("lucky_match").disabled = false;
  //Limpia el input
  const nameInput = document.getElementById("names");
  nameInput.value = "";
  //Muestra nuevamente las instrucciones del juego
  const inicialText = document.getElementById("inicial-text");
  inicialText.classList.remove("hidden-element");
  //Esconde el contenedor de las frases
  let container = document.getElementById("container");
  container.classList.add("hidden-element");
};
document.getElementById("reset").addEventListener("click", resetAll);

document.getElementById("reset").addEventListener("click", function () {
  var button = this;
  button.style.animation = "none";
  button.offsetHeight;
  button.style.animation = "";
});
