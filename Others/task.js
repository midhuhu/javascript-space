class TaskPro {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    async run() {
        const runTask = (taskIndex) => {
            const task = this.tasks[taskIndex];
            if (!task) return Promise.resolve();

            return new Promise((resolve) => {
                task(() => {
                    resolve(runTask(taskIndex + 1));
                });
            });
        };
        return runTask(0);
    }
}

const t = new TaskPro();

t.addTask(async (next) => {
    console.log(1, 'start');
    await next();
    console.log(1, 'end');
});

t.addTask(async (next) => {
    console.log(2);
    t.addTask(async () => {
        console.log(3);
    });
    await next();
});

t.run();
// Output: 1 start, 2, 3, 1 end