import './styles.css';
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

function addTaskToDom(taskElement) {
    const taskZone = document.getElementById('taskZone');
    taskZone.appendChild(taskElement);
}

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