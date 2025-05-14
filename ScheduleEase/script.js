document.addEventListener("DOMContentLoaded", function () {
    const newTaskButtons = document.querySelectorAll('.new-task');
    newTaskButtons.forEach(button => {
        button.addEventListener('click', function () {
            const taskContent = prompt('Enter your task:');
            if (taskContent) {
                const taskElement = document.createElement('li');
                taskElement.textContent = taskContent;
                taskElement.addEventListener('click', function () {
                    moveTask(taskElement);
                });

                // Find the parent column of the clicked button
                const parentColumn = button.closest('.task-column');
                const taskList = parentColumn.querySelector('ul');
                taskList.appendChild(taskElement);
            }
        });
    });
});

function moveTask(taskElement) {
    const status = taskElement.parentElement.id;
    let nextStatus = '';

    if (status === 'not-started') {
        nextStatus = 'in-progress';
    } else if (status === 'in-progress') {
        nextStatus = 'done';
    } else if (status === 'done') {
        return; // No further status
    }

    document.getElementById(`${nextStatus}-tasks`).appendChild(taskElement);
}
