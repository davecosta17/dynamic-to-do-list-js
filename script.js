document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }

    // Save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a task element and append it to the DOM
    function createTaskElement(taskText) {
        // Create list item and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // When remove button is clicked, remove this li from the list and update Local Storage
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        // Append remove button to li and li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to add a new task to the list
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // If the input is empty, prompt the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Add task to the tasks array and save to Local Storage
        tasks.push(taskText);
        saveTasks();

        // Create and append the task element
        createTaskElement(taskText);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    // Allow adding tasks via Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks on page load
    loadTasks();
});