function addToList () {
    console.log ('button clicked');
    let todoInput = document.getElementById('todoInput');
    let todoList = document.getElementById ('todoList');

    let newtoDo = document.createElement ('li');
    newtoDo.textContent = todoInput.value;
    newtoDo.onclick = removetoDo;

    todoList.appendChild(newtoDo);
    todoInput.value = ' ';
}
function removetoDo () {
    let listItem = this;
    listItem.classList.add ('crossed');
    setTimeout(function () {
        listItem.remove();
    }, 2000);
}
