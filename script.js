            document.addEventListener('DOMContentLoaded', () => {
                // Select DOM elements
                const addButton = document.getElementById('add-task-btn');
                const taskInput = document.getElementById('task-input');
                const taskList = document.getElementById('task-list');

                // Function to add a new task to the list
                function addTask() {
                    // Get and trim the input value
                    const taskText = taskInput.value.trim();

                    // If the input is empty, prompt the user
                    if (taskText === '') {
                        alert('Please enter a task.');
                        return;
                    }

                    // Create list item and set its text
                    const li = document.createElement('li');
                    li.textContent = taskText;

                    // Create remove button
                    const removeBtn = document.createElement('button');
                    removeBtn.textContent = 'Remove';
                    removeBtn.className = 'remove-btn';

                    // When remove button is clicked, remove this li from the list
                    removeBtn.onclick = () => {
                        taskList.removeChild(li);
                    };

                    // Append remove button to li and li to the list
                    li.appendChild(removeBtn);
                    taskList.appendChild(li);

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

                // Invoke addTask on load if there's initial input (avoids unwanted alert)
                if (taskInput.value.trim() !== '') {
                    addTask();
                }
            });