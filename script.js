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
        
        //implement task complete functionality
        taskItem.querySelector('.checkbox').addEventListener('change', (e) => {
            taskItem.classList.toggle('completed', e.target.checked);
        });

        //implement edit functionality
        taskItem.querySelector('.edit-task').addEventListener('click', () => {
            //referrence of list item elements
            const taskTextElement = taskItem.querySelector('.task-text');
            const editInputElement = taskItem.querySelector('.edit-input');
            const editButton = taskItem.querySelector('.edit-task');
            if (editButton.textContent === 'Edit') {
                editInputElement.value = taskTextElement.textContent;
                taskTextElement.style.display = 'none';
                editInputElement.style.display = 'inline-block';
                editButton.textContent = 'Save';
            } else {
                const editedText = editInputElement.value.trim();
                if (editedText === '') {
                    alert('Please enter a task');
                    return;
                }
                taskTextElement.textContent = editedText;
                taskTextElement.style.display = 'inline-block';
                editInputElement.style.display = 'none';
                editButton.textContent = 'Edit';
            }    
        })
    }



    addTaskButton.addEventListener('click', addTask);//add event listener to button click event
    newTaskInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            addTask();
        }
    })//add eventlistener to the input field for key press
})


// document.addEventListener('DOMContentLoaded', () => {
//     const newTaskInput = document.getElementById('new-task');
//     const addTaskButton = document.getElementById('add-task');
//     const taskList = document.getElementById('task-list');

//     // Add a new task
//     const addTask = () => {
//         const taskText = newTaskInput.value.trim();
//         if (taskText === '') {
//             alert('Please enter a task');
//             return;
//         }

//         const taskItem = document.createElement('li');
//         taskItem.className = 'task';
//         taskItem.innerHTML = `
//             <input type="checkbox" class="checkbox">
//             <span class="task-text">${taskText}</span>
//             <input type="text" class="edit-input" style="display:none;">
//             <button class="edit-task">Edit</button>
//             <button class="delete-task">X</button>
//         `;

//         // Add event listener to the delete button
//         taskItem.querySelector('.delete-task').addEventListener('click', () => {
//             taskItem.remove();
//         });

//         // Add event listener to the checkbox
//         taskItem.querySelector('.checkbox').addEventListener('change', (e) => {
//             taskItem.classList.toggle('completed', e.target.checked);
//         });

//         // Add event listener to the edit button
//         taskItem.querySelector('.edit-task').addEventListener('click', () => {
//             const taskTextElement = taskItem.querySelector('.task-text');
//             const editInputElement = taskItem.querySelector('.edit-input');
//             const editButton = taskItem.querySelector('.edit-task');

//             if (editButton.textContent === 'Edit') {
//                 // Switch to edit mode
//                 editInputElement.value = taskTextElement.textContent;
//                 taskTextElement.style.display = 'none';
//                 editInputElement.style.display = 'inline-block';
//                 editButton.textContent = 'Save';
//             } else {
//                 // Save the edited task
//                 const editedText = editInputElement.value.trim();
//                 if (editedText === '') {
//                     alert('Please enter a task');
//                     return;
//                 }
//                 taskTextElement.textContent = editedText;
//                 taskTextElement.style.display = 'inline-block';
//                 editInputElement.style.display = 'none';
//                 editButton.textContent = 'Edit';
//             }
//         });

//         taskList.appendChild(taskItem);
//         newTaskInput.value = '';
//     };

//     // Event listeners
//     addTaskButton.addEventListener('click', addTask);
//     newTaskInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             addTask();
//         }
//     });
// });
