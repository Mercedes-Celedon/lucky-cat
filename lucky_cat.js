function addNewName(){

  let name= document.getElementById("names");
  let lista= document.getElementById("list_names")
  const li = document.createElement("li");
  li.textContent= name.value;
  name.value=""
 lista.appendChild(li)
}

document.getElementById("button_names").addEventListener("click", addNewName)