let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tasks = [];

function renderTasks() {
    listElement.innerHTML = '';

    tasks.map((item) => {
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(item);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(item);

        linkElement.setAttribute('onclick', `deleteTask(${position})`)

        listElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function addTasks() {
    if (inputElement.value === '') {
        alert('Digite uma tarefa!')
        return false;
    } else {
        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = '';

        renderTasks();
        saveData();
        saveData();
    }
}

buttonElement.onclick = addTasks;

function deleteTask(position) {
    tasks.splice(position, 1)
    renderTasks();
}

function saveData() {
    localStorage.setItem('@Tasks', JSON.stringify(tasks));
}