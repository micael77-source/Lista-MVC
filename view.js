class View {
    constructor() {
    this.input = document.getElementById('Taskinput');
    this.button = document.getElementById('addTaskButton');
    this.list = document.getElementById('taskList');
}
 clearinput () {
    this.inpuut.value = '';
    
}

renderTasks(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.done) {
            li.classList.add('completed');
 } 
        li.addEventListener('click', () => this.ontoggle(index));
        li.addEventListener('dblclick', () => this.onRemove(index));
        this.list.appendChild(li);
     });
    }
    bindAdd(handler) {
        this.button.addEventListener('click', () => {
            if (this.input.value.trim()) {
           handler(this.input.value);
           this.clearInput();
        }
    });
}
bindToggle(handler) {
    this.onToggle = handler;
}
bindRemove(handler) {
    this.onRemove = handler;
}}