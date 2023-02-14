let plusButton = document.getElementById("append-task-button");
let myUl = document.getElementById("todo-ul");
let inputField = document.getElementById("task-input");

plusButton.addEventListener("click", function() {
    let liElement = document.createElement("li");
    liElement.textContent = inputField.value;
    myUl.appendChild(liElement);
    inputField.value = "";
});