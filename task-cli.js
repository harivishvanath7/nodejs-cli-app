// task-cli.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

// Load tasks or create file if not exists
function loadTasks() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]', 'utf8');
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Save tasks to file
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}

// Generate unique ID
function generateId(tasks) {
    return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
}

// Parse command line arguments
const [,, command, ...args] = process.argv;

const tasks = loadTasks();


// ADD Task
if (command === 'add') {
    const description = args.join(' ');
    if (!description) return console.log('Please provide a task description.');

    const newTask = {
        id: generateId(tasks),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
}


// UPDATE Task
else if (command === 'update') {
    const id = parseInt(args[0]);
    const description = args.slice(1).join(' ');
    const task = tasks.find(t => t.id === id);
    if (!task) return console.log('Task not found.');

    task.description = description || task.description;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task updated successfully (ID: ${task.id})`);
}

// DELETE Task
else if (command === 'delete') {
    const id = parseInt(args[0]);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return console.log('Task not found.');

    tasks.splice(index, 1);
    saveTasks(tasks);
    console.log(`Task deleted successfully (ID: ${id})`);
}


// MARK Task
else if (command === 'mark-done' || command === 'mark-in-progress') {
    const id = parseInt(args[0]);
    const task = tasks.find(t => t.id === id);
    if (!task) return console.log('Task not found.');

    task.status = command === 'mark-done' ? 'done' : 'in-progress';
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task (ID: ${task.id}) marked as ${task.status}`);
}

// LIST Tasks
else if (command === 'list') {
    const filter = args[0]; // done, todo, in-progress
    let filteredTasks = tasks;

    if (filter === 'done' || filter === 'todo' || filter === 'in-progress') {
        filteredTasks = tasks.filter(t => t.status === filter);
    }

    if (filteredTasks.length === 0) return console.log('No tasks found.');

    filteredTasks.forEach(task => {
        console.log(`${task.id}. [${task.status}] ${task.description}`);
    });
}

// HELP Command
else {
    console.log(`
Usage:
  add "Task description"
  update <id> "Updated description"
  delete <id>
  mark-done <id>
  mark-in-progress <id>
  list [done|todo|in-progress]
`);
}
