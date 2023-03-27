let plusButton = document.getElementById("append-task-button");
let myUl = document.getElementById("todo-ul");
let inputField = document.getElementById("task-input");

plusButton.addEventListener("click", handleItem);
document.addEventListener("keypress", function enterPress(e) {
    if (e.which === 13) {
        handleItem();
    }
})

function handleItem() {
    let liElement = document.createElement("li");
    let priorityStatus = document.createElement("span");
    let deleteButton = document.createElement("button");
   
    liElement.className = "list-item"
    liElement.textContent = inputField.value;

    priorityStatus.className = "red";
    priorityStatus.id = "status-indicator";

    deleteButton.className = "delete";
    deleteButton.id = "delete-list-items"
    deleteButton.textContent = "X"

   myUl.appendChild(liElement);
   liElement.appendChild(priorityStatus);
   liElement.appendChild(deleteButton)

    inputField.value = "";

    deleteButton.addEventListener("click", function() {
        myUl.removeChild(liElement);
        liElement.removeChild(priorityStatus);
    });

    priorityStatus.addEventListener("click", function() {
        if (priorityStatus.className == "red") {
            priorityStatus.className = "yellow";
        } else if (priorityStatus.className == "yellow") {
            priorityStatus.className = "green";
        } else {
            priorityStatus.className = "red";
        };
    });
    
};