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

  //Consigo el value del input y le hago push al array para almacenar los nombres
  let names = name.value;
  playersName.push(names);
  console.log(playersName);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Y";
  editBtn.classList.add("editB");

  //editBtn.addEventListener('click', editName )

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  lista.appendChild(li);
  name.value = "";


};
document.getElementById("button_names").addEventListener("click", addNewName);




let deleteAll = document.querySelectorAll(".btn");
for (const btn of deleteAll) {
  btn.addEventListener("click", deleteName);
}

function deleteName(event) {
  let li = event.target.parentElement;
  li.remove();
}

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





