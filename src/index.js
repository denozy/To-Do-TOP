import './styles.css';

//factory function for creating a to do object
function createToDo(title, description, dueDate, priority, notes, complete) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        complete
    };
}

//takes inputs from modal turns them into html elements and adds to div
function createTaskElement(task) {
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
    <h2>${task.title}</h2>
    <p>Description: ${task.description}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Notes: ${task.notes}</p>
    <p>Complete: ${task.complete ? 'Yes' : 'No'}</p>
    `;
    return taskDiv;
}

//function that adds taskDiv to webpage
function addTaskToDom(taskElement) {
    const taskZone = document.getElementById('taskZone');
    taskZone.appendChild(taskElement);
}

//function to collect data from modal
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('taskForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting normally
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const notes = document.getElementById('notes').value;
        const complete = document.getElementById('complete').checked;

        const newTask = createToDo(title, description, dueDate, priority, notes, complete);

        // Do something with newTask, like adding it to your task list
       const taskElement = createTaskElement(newTask);
       addTaskToDom(taskElement);

       form.reset();

    });
});

//hide input modal
//make create task btn show input modal
//make tasks appear in a pretty way
//add unique modifieres to tasks? project/daily/completed tasks
//show those modifiers in a sidebar and seamlessly switch between them like in the previous project where you clear html content and show other content without reloading the page
//make everything prettier. 

//modal x button close
    let closeBtn = document.getElementById('closeModal');
    let modalContainer = document.getElementById('modalContainer');
    closeBtn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        form.reset();
    });

    let createTask = document.getElementById('createTaskBtn');
    createTask.addEventListener('click', () => {
        modalContainer.style.display = 'block';
    });