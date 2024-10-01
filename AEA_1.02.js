// Functions List --------------------------
function addTask() {
    const taskInput = document.getElementById("task").value;
    if (taskInput.trim() === "") return;

    const taskList = document.getElementById("listTasks");

    const li = document.createElement("li");
    li.textContent = taskInput;
    li.className = "liClass";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteClass";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    document.getElementById("taskInput").value = ""
}