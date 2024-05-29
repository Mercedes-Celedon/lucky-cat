let playersName = [];

const addNewName = () => {
  if (playersName.length >= 15) {
    alert("15 players maximum");
    return;
  }


  
  let name = document.getElementById("names");
  let lista = document.getElementById("list_names");
  const li = document.createElement("li");
  if (name.value === "") {
    alert("Type a name");
    return;
  } else {
    li.textContent = name.value;
  }

  localStorage.setItem('playersName', JSON.stringify(playersName));
  console.log(playersName);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("btn");
  deleteBtn.addEventListener("click", deleteName);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Y";
  editBtn.classList.add("btn-edit");
  editBtn.addEventListener("click", editName);

  //Consigo el value del input y le hago push al array para almacenar los nombres
  let names = name.value;
  playersName.push(names);
  console.log(playersName);

  //Agrega un atributo al elemento li, después que lo agregamos al array
  li.setAttribute("data-position", playersName.length - 1);

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  lista.appendChild(li);
  name.value = "";


};
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

let listaLucky = document.getElementById("container"); // ul oraciones
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
  for (let index = 0; index < playersName.length; index++) {
    let randomIndex = phrases(sentences.length);
    let randomPhrase = sentences[randomIndex];

    const divMatch = document.createElement("div");
    const pName = document.createElement("p");
    pName.textContent = playersName[index];
    const imgFortuna = document.createElement("img");
    imgFortuna.classList.add("img-fortuna");
    imgFortuna.src = "./images/galleta-de-la-fortuna.png";
    const pPhrase = document.createElement("p");
    pPhrase.innerText = randomPhrase;

    divMatch.appendChild(pName);
    divMatch.appendChild(imgFortuna);
    divMatch.appendChild(pPhrase);
    listaLucky.appendChild(divMatch);
  }
  
};
document
  .getElementById("lucky_match")
  .addEventListener("click", addRandomPhrase);



document.getElementById("button_names").addEventListener("click", addNewName);



// Solo letras y espacios (hay dos posibilidades) 
/*
document.getElementById("names").addEventListener("keypress", function(event) {
  if (!/[a-zA-Z\s]/.test(String.fromCharCode(event.which))) {
      event.preventDefault();
  }
});
*/

/*
document.getElementById("names").addEventListener("input", function() {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});
*/

/*
document.getElementById("names").addEventListener("input", function() {
  this.value = this.value.replace(/[^a-zA-Z\sñÑ]/g, '');
});
*/





