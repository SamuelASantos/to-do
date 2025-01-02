var list = document.querySelector('.task');
let inputText = document.querySelector('#tasks');
inputText.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() === 'enter') {
        addTask();
    }
})

let tasks = [];

function addTask() {
    if (inputText.value !== '') {
        tasks.push({
            done: false,
            title: inputText.value
        });
    }
    inputText.value = '';
    renderList();
}

function renderList() {
    list.innerHTML = '';

    for (let i in tasks) {
        let taskLi = document.createElement('li');
        let taskInput = document.createElement('input');
        let taskSpan = document.createElement('span');

        taskInput.setAttribute('type', ('checkbox'));
        if (tasks[i].done) {
            taskInput.setAttribute('checked', 'true');
            taskLi.classList.add('done');
        }

        taskInput.addEventListener('click', () => {
            tasks[i].done = !tasks[i].done;
            renderList();
        });

        taskLi.appendChild(taskInput);

        taskSpan.innerHTML = tasks[i].title;
        taskLi.appendChild(taskSpan);

        list.appendChild(taskLi);
    }
}

renderList();