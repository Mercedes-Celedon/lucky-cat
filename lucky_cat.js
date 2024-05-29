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

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Y';
  editBtn.classList.add('btn-edit')
  editBtn.addEventListener('click', editName )

  //Consigo el value del input y le hago push al array para almacenar los nombres
  let names = name.value;
  playersName.push(names);
  console.log(playersName);

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
  let editAll=document.querySelectorAll('.btn-edit')
for (const btn of editAll){
  btn.addEventListener('click', editName)

}

function deleteName(event) {
  let li = event.target.parentElement;
  li.remove();
}

function editName(event){
  let name= document.getElementById("names");
  let li= event.target.parentElement;
  let nameInner=li.innerText;
  console.log(nameInner)
  name.value= nameInner;
  console.log(name.textContent)
  li.remove()
}


document.getElementById("button_names").addEventListener("click", addNewName);
