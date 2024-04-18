import './styles.css';

//factory function for creating a to do object
function createToDo(title, description, dueDate, priority, notes, category, complete) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        category,
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
    <p>Category: ${task.category}</p>
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
        const categoryElement = document.getElementById('category');
        const category = categoryElement.options[categoryElement.selectedIndex].text;
        const complete = document.getElementById('complete').checked;
        

        const newTask = createToDo(title, description, dueDate, priority, notes, category, complete);

        // Do something with newTask, like adding it to your task list
       const taskElement = createTaskElement(newTask);
       taskElement.classList.add('toDoItem');
       addTaskToDom(taskElement);

       form.reset();

    });
});


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


//script to make task creation modal movable
let offsetX = 0;
let offsetY = 0;

function mouseDown(e) {

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.tagName === 'SELECT') {
        return;
    }

    console.log('mousedown');
    e.preventDefault();
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    console.log('mousemove');
    modal.style.left = (e.clientX - offsetX) + 'px';
    modal.style.top = (e.clientY - offsetY) + 'px';
}

function mouseUp() {
    console.log('mouseup');
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}

modal.addEventListener('mousedown', mouseDown);



    
//assign tasks to certain categories corresponding with the sidebar.
//
//add functionality to the sidebar links, these probably need to be buttons
//buttons that clear the content of the page and then replace with a different one
//use logic from previous project for this ^^^
//make to do items movable. 
//fix 