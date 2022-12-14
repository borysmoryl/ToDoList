// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

//Functions
function addTodo(event){
    event.preventDefault();   //prevent from submitting
    //console.log("hello");

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    //newTodo.innerText = "hey";
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check mark button
    const complitedButton = document.createElement("button");
    complitedButton.innerHTML= '<i class="fas fa-check"></i>';
    complitedButton.classList.add("complete-btn");
    todoDiv.appendChild(complitedButton);

    //Trash mark button
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list - html list
    todoList.appendChild(todoDiv);
    //Clear Todo Input Value
    todoInput.value= "";
}; 

function deleteCheck (e) {
    const item = e.target;
    //DELETE TODO
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
    }
    // CHECK
    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }


}