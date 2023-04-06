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
    let checkContainer = document.createElement("span");
    let checkBox = document.createElement("input");
    let deleteButtonSpan = document.createElement("span");
   
    liElement.className = "list-item";
    liElement.textContent = inputField.value;
    liElement.addEventListener("click", function() {
        if (liElement.className == "list-item" ) {
        liElement.classList.add("struck-through");
        } else {
        liElement.classList.remove("struck-through");
        }
    });

    priorityStatus.className = "red";
    priorityStatus.id = "status-indicator";

    deleteButton.className = "delete";
    deleteButton.id = "delete-list-items";
    deleteButton.textContent = "X";

    checkBox.setAttribute("type", "checkbox");
    checkBox.id = "mark-task-complete";

    checkContainer.className = "check-box-container";

  if  (inputField.value == "") {
    alert("The input field appears to be empty!");
  } else {
    myUl.appendChild(checkContainer);
    checkContainer.appendChild(checkBox);
    myUl.appendChild(liElement);
    liElement.appendChild(priorityStatus);
    // liElement.appendChild(deleteButton);
    liElement.appendChild(deleteButtonSpan);
    deleteButtonSpan.appendChild(deleteButton);
  };
  
    inputField.value = "";

    deleteButton.addEventListener("click", function() {
        myUl.removeChild(liElement);
        myUl.removeChild(checkContainer);
        liElement.removeChild(priorityStatus);
        checkContainer.removeChild(checkBox);
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