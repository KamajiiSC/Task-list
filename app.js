const form = document.querySelector("#pageForm");
const task = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const sort = document.querySelector("#sortInput");

form.addEventListener('click', clickHandler);
sort.addEventListener("keyup", keyHandler)

function clickHandler(e) { 
  if(e.target.id == "addBtn"){
    addTask();
  }
  else if(e.target.id == "btnClear"){
    clearTasks();
  }
  else if(e.target.className == "delete"){
    deleteTask(e);
  }

  e.preventDefault();
}

function addTask(){
  let loadTask
  if(task.value == ""){
    alert("Please enter a task");
  }
  else{
    loadTask = task.value;
    console.log(loadTask);
    let li = document.createElement("li");
    li.id = 'listItem';
    li.innerHTML = `${loadTask} <a class='delete' align='right' href='#'>&#10007;</a>`;
    list.appendChild(li);
    task.value = "";
  }
}
function clearTasks(){
  let count = list.childElementCount;
  for(let i=0; i<=count; i++){
    list.removeChild(list.childNodes[0]);
  }
}
function deleteTask(e){
  e.target.parentNode.id = 'marked';
  e.target.parentNode.parentNode.removeChild(document.getElementById('marked'));
}

function keyHandler(e){
  let sorting = e.target.value;
  let c = list.children;

  for(let i=0; i<c.length; i++){
    let cString = c[i].textContent.substr(0, sorting.length);
    
    if(cString != sorting){
      c[i].style.display = "none";
    }
    else{
      c[i].style.display = "";
    }

  }
}