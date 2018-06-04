const form = document.querySelector("#pageForm");
const task = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#addBtn");



form.addEventListener('click', clickHandler);

function clickHandler(e) {
  let loadTask
  if(e.target.id == "addBtn"){
    loadTask = task.value;
    console.log(loadTask);
    task.value = "";
  }
  
  e.preventDefault();
}