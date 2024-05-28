


const addNewName=() => { 
  let name= document.getElementById("names"); 
  let lista= document.getElementById("list_names") 
  const li = document.createElement("li"); 
  if(name.value === ""){
    alert("Type a name");
  }else{
  
  li.textContent= name.value;
  }
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add ('btn')

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Y';
  editBtn.classList.add("editB")
  deleteBtn.addEventListener('click', deleteName );

 
  //editBtn.addEventListener('click', editName )
   
  li.appendChild (deleteBtn)
  li.appendChild (editBtn)
  lista.appendChild(li) 
  name.value="" 
  

  //guardado          = JSON.parse(localStorage.getItem('datos'));
  
  }

  document.getElementById("button_names").addEventListener("click", addNewName)

   
let namesPlay = []; 
  namesPlay.push(name.value)
  
let deleteAll = document.querySelectorAll ('.btn')
for (const btn of deleteAll) {
  btn.addEventListener ('click', deleteName)
}

function deleteName ( event ) {
  let li = event.target.parentElement
  li.remove () 

}


