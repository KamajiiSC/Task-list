const form = document.querySelector("#pageForm");
const task = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");


form.addEventListener('click', clickHandler);

function clickHandler(e) {
  let loadTask
  if(e.target.id == "addBtn"){
    loadTask = task.value;
    console.log(loadTask);
    let li = document.createElement("li");
    li.id = 'list';
    li.innerHTML = `${loadTask} <a align='right' href='#'>&#10007;</a>`;
    list.appendChild(li);
    task.value = "";
  }
  
  e.preventDefault();
}