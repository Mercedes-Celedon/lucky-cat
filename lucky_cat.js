const addNewName=() => { 
  let name= document.getElementById("names"); 
  let lista= document.getElementById("list_names") 
  const li = document.createElement("li"); 
/*   if(name.value === ""){
    alert("Type a name");
  }else{ */
  
  li.textContent= name.value;
  lista.appendChild(li) 
  name.value="" 
  }

document.getElementById("button_names").addEventListener("click", addNewName)