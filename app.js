const form = document.querySelector("#pageForm");
const task = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#addBtn");

console.log(taskBtn);

form.addEventListener('click', clickHandler);

function clickHandler(e) {

  e.preventDefault();
}