const app = (() => {
    const model = new Model();
    const view = new View();

    function updateView() {
    view.renderTasks(model.getTasks());
    }

    view.bindAdd(task => {
        model.addTask(task);
        updateView();
    });

    view.bindToggle(index => {
        model.toggleTask(index);
        updateView();
    });

    view.bindRemove(index => {
        model.removeTask(index);
        updateView();
    });

    updateView();

})();