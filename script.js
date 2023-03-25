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
   
    liElement.className = "list-item"
    liElement.textContent = inputField.value;

    priorityStatus.className = "red";
    priorityStatus.id = "status-indicator";

   myUl.appendChild(liElement);
   liElement.appendChild(priorityStatus);

    inputField.value = "";
    liElement.addEventListener("dblclick", function () {
        myUl.removeChild(liElement);
        myUl.removeChild(priorityStatus);
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