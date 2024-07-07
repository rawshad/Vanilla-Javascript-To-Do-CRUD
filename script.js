document.addEventListener('DOMContentLoaded', () => {
    //references to the input field, add button, and task list:
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // add task function
    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText == "") {
            alert("please enter a task"); // show prompt if input field is empty
            return;//exit addTask function
        }

        const taskItem = document.createElement('li');//create a list item li element
        taskItem.className = 'task'; // assign a class name for the li
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span class="task-text">${taskText}</span>
            <input type="text" class="edit-input" style="display:none;">
            <button class="edit-task">Edit</button>
            <button class="delete-task">X</button>
        `;//add necessary elements to complete the list

        taskList.appendChild(taskItem);//inject the li to the corresponding ul
        newTaskInput.value = "";//reset the value of the input field
        
        //implement delete functionality
        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskItem.remove();
        });
    }



    addTaskButton.addEventListener('click', addTask);//add event listener to button click event
    newTaskInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            addTask();
        }
    })//add eventlistener to the input field for key press
})