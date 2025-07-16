class model {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this,this.tasks.push({ Text: task, done: false });
    }

    toggleTask(index) {
        this.tasks[index].done = !this.tasks[index].done;
    }
    
removeTask(index) {
    this.tasks.splice(index, 1);
}

getTasks () {
    return this.tasks;
}
}