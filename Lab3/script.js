const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskSpan.classList.add("checked");
        } else {
            taskSpan.classList.remove("checked");
        }
    });

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}
