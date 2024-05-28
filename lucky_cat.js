let playersName = [];

const addNewName = () => {
  let name = document.getElementById("names");
  let lista = document.getElementById("list_names");
  const li = document.createElement("li");
  if (name.value === "") {
    alert("Type a name");
    return;
  } else {
    li.textContent = name.value;
  }
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

  //guardado= JSON.parse(localStorage.getItem('datos'));
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
