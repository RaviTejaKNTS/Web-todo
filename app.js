const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const filterSelect = document.getElementById("filter");


todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteComplete);
filterSelect.addEventListener("click", filterTodo);


function addToDo() {
    //creating todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Creating todo listItem 
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoInput.value = null;
    todoDiv.appendChild(newTodo);
    //Checked button 
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    //Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");
    todoDiv.appendChild(deleteButton);
    //append entire div to ul
    todoList.appendChild(todoDiv);
}

function deleteComplete(event) {
    const item = event.target
    //delete button
    if (item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.classList.add("deleted")
        todo.addEventListener("transitionend", function(){
            todo.remove()
        })
    }
    //checked button
    if (item.classList[0]==="complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}