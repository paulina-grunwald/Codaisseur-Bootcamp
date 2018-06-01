
function addToList() {
    var userInput = document.getElementById("new-todo");
    var newTodoName = userInput.value;
    createToDo(newTodoName);
  

}

function createToDo(name) {
    var newListItem = document.createElement("li");
    newListItem.className = "todo";
    var item = document.createElement("item");
    item.innerHTML = name;
    newListItem.appendChild(item);

    var toDoList = document.getElementById("todolist");
    toDoList.appendChild(newListItem);
}


button.addEventListener("click", addToList);
