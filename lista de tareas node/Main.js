const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function displayMenu() {
  console.log('*** To-Do List ***');
  console.log('1. Add Task');
  console.log('2. View Tasks');
  console.log('3. Mark Task as Completed');
  console.log('4. Delete Task');
  console.log('5. Exit');
}

function addTask() {
  rl.question('Enter task description: ', (description) => {
    const task = {
      id: tasks.length + 1,
      description: description,
      completed: false
    };
    tasks.push(task);
    console.log('Task added successfully!');
    displayMenu();
    chooseOption();
  });
}

function viewTasks() {
  console.log('*** Tasks ***');
  tasks.forEach((task) => {
    console.log(`${task.id}. [${task.completed ? 'x' : ' '}] ${task.description}`);
  });
  displayMenu();
  chooseOption();
}

function markTaskCompleted() {
  rl.question('Enter task ID to mark as completed: ', (taskId) => {
    const task = tasks.find(task => task.id === parseInt(taskId));
    if (task) {
      task.completed = true;
      console.log('Task marked as completed!');
    } else {
      console.log('Task not found with the provided ID.');
    }
    displayMenu();
    chooseOption();
  });
}

function deleteTask() {
  rl.question('Enter task ID to delete: ', (taskId) => {
    const index = tasks.findIndex(task => task.id === parseInt(taskId));
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log('Task deleted successfully!');
    } else {
      console.log('Task not found with the provided ID.');
    }
    displayMenu();
    chooseOption();
  });
}

function chooseOption() {
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        viewTasks();
        break;
      case '3':
        markTaskCompleted();
        break;
      case '4':
        deleteTask();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();
