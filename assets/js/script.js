let list = document.querySelector('.task');
let input_text = document.querySelector('#tasks');

let tasks = [
    { done: false, title: 'Fazer academia' },
    { done: true, title: 'Estudar programação' },
    { done: false, title: 'Fazer a feira' }
];

function renderList() {
    list.innerHTML = '';

    for (let i in tasks) {
        let taskLi = document.createElement('li');
        taskLi.innerHTML = tasks[i].title;

        list.appendChild(taskLi);
    }
}

renderList();