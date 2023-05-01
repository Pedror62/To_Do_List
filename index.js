//debugger
const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
buttonNewTask.addEventListener('click', addTask);
const newTaskInput = document.querySelector('.new-task input');

const localStoragekey = 'toDolist';

function addTask(event) {
  event.preventDefault();
  // validation
  if (!newTaskInput.value) {
    alert('Digite algo no campo em aberto!');
  } else {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    values.push({
      name: newTaskInput.value
    });
    localStorage.setItem(localStoragekey, JSON.stringify(values));
  }

  newTaskInput.value = "";
  showValues();
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
   let list = document.getElementById("task-item");
  taskBox.innerHTML = '';

  for (let i = 0; i < values.length; i++) {
    const taskItem = document.createElement('label');
    taskItem.classList.add('task-item');

    const checkboxinput = document.createElement('input');
    checkboxinput.type = 'checkbox';

    const taskItemText = document.createElement('p');
    taskItemText.innerText = values[i]['name'];

    const fakeChackboxInput = document.createElement('span');
    fakeChackboxInput.classList.add('fake-checkbox');

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa');
    checkIcon.classList.add('fa-check');

    const buttonTrash = document.createElement('button');

    const trashItems = document.createElement('i');
    trashItems.classList.add('fa-solid');
    trashItems.classList.add('fa-trash-can');

    taskItem.appendChild(checkboxinput);
    taskItem.appendChild(fakeChackboxInput);
    fakeChackboxInput.appendChild(checkIcon);
    taskItem.appendChild(taskItemText);
    taskItem.appendChild(buttonTrash);
    buttonTrash.appendChild(trashItems);
    taskBox.appendChild(taskItem);

    buttonTrash.addEventListener('click', deleteTask);
    checkboxinput.addEventListener('click', completeTask);

  
  }

}


function deleteTask(event) {
  event.target.parentElement.remove();
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let index = values.findIndex(x => x.name === event.target.parentElement.innerText.trim());
  values.splice(index, 1);
  localStorage.setItem(localStoragekey, JSON.stringify(values));
  showValues();
}


function completeTask(event) {
  event.target.parentElement.classList.toggle('complete');
}

// carrega as tarefas salvas ao carregar a página
window.onload = showValues();









/*const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
buttonNewTask.addEventListener('click', addTask);
const newTaskInput = document.querySelector('.new-task input');

const localStoragekey = 'toDolist'

function addTask(e) {
  Event.preventDefault(e);
  //validation
  if (!newTaskInput.value) {
    alert('Digite algo no campo em aberto!')
  } else {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    values.push({
      name: newTaskInput.value
    })
    localStorage.setItem(localStoragekey, JSON.stringify(values))
  }

  newTaskInput.value = "";


  
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let list = document.getElementById("task-item");
  //list.innerHTML = '';

  for (let i = 0; i < values.length; i++) {
    const taskItem = document.createElement('label');
    taskItem.classList.add('task-item');

    const checkboxinput = document.createElement('input');
    checkboxinput.type = 'checkbox';

    const taskItemText = document.createElement('p');
    taskItemText.innerText = values[i]['name'];

    const fakeChackboxInput = document.createElement('span');
    fakeChackboxInput.classList.add('fake-checkbox');

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa');
    checkIcon.classList.add('fa-check');

    const buttonTrash = document.createElement('button');

    const trashItems = document.createElement('i');
    trashItems.classList.add('fa-solid');
    trashItems.classList.add('fa-trash-can');

    taskItem.appendChild(checkboxinput);
    taskItem.appendChild(fakeChackboxInput);
    fakeChackboxInput.appendChild(checkIcon);
    taskItem.appendChild(taskItemText);
    taskItem.appendChild(buttonTrash);
    buttonTrash.appendChild(trashItems);
    taskBox.appendChild(taskItem);

    buttonTrash.addEventListener('click', deleteTask);
    checkboxinput.addEventListener('click', completeTask);


    
  }
}

function deleteTask(e) {
  e.target.parentElement.remove();
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let index = values.findIndex(x => x.name === e.target.parentElement.innerText.trim());
  values.splice(index, 1);
  localStorage.setItem(localStoragekey, JSON.stringify(values));
}

function completeTask(e) {
  e.target.parentElement.classList.toggle('complete');
}

// carrega as tarefas salvas ao carregar a página
window.onload = showValues();















/*const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
buttonNewTask.addEventListener('click', addTask);
const newTaskInput = document.querySelector('.new-task input');

const localStoragekey = 'toDolist'

function addTask(e) {
  //validation
  if (!newTaskInput.value) {
    alert('Digite algo no campo em aberto!')
  } else {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    values.push({
      name: newTaskInput.value
    })
    localStorage.setItem(localStoragekey, JSON.stringify(values))
  }

  showValues();

  newTaskInput.value = "";
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let list = document.getElementById("task-item");
  //list.innerHTML = '';

  for (let i = 0; i < values.length; i++) {
    const taskItem = document.createElement('label');
    taskItem.classList.add('task-item');

    const checkboxinput = document.createElement('input');
    checkboxinput.type = 'checkbox';

    const taskItemText = document.createElement('p');
    taskItemText.innerText = values[i]['name'];

    const fakeChackboxInput = document.createElement('span');
    fakeChackboxInput.classList.add('fake-checkbox');

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa');
    checkIcon.classList.add('fa-check');

    const buttonTrash = document.createElement('button');

    const trashItems = document.createElement('i');
    trashItems.classList.add('fa-solid');
    trashItems.classList.add('fa-trash-can');

    taskItem.appendChild(checkboxinput);
    taskItem.appendChild(fakeChackboxInput);
    fakeChackboxInput.appendChild(checkIcon);
    taskItem.appendChild(taskItemText);
    taskItem.appendChild(buttonTrash);
    buttonTrash.appendChild(trashItems);
    taskBox.appendChild(taskItem);

    buttonTrash.addEventListener('click', deleteTask);
    checkboxinput.addEventListener('click', completeTask);
  }
}

function deleteTask(e) {
  e.target.parentElement.remove();
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let index = values.findIndex(x => x.name === e.target.parentElement.innerText.trim());
  values.splice(index, 1);
  localStorage.setItem(localStoragekey, JSON.stringify(values));
}
function deleteTask(event) {
  event.target.parentElement.remove();
}

function completeTask(e) {
  e.target.parentElement.classList.toggle('complete');


}

// carrega as tarefas salvas ao carregar a página
window.onload = showValues;






///apos atualização e correção
/*
const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
buttonNewTask.addEventListener('click', addTask);
const newTaskInput = document.querySelector('.new-task input');


const localStoragekey = 'toDolist'




function addTask(e) {


function showValues() {
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let list = document.getElementById("task-item");
  list.innerHTML = '';
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<label>${values[i]['name']} <button onclick='deleteTask(${i})'>Delete</button></label>`
  }
  event.preventDefault();
}
  
  //validation

  if (!newTaskInput.value) {
    alert('digite algo para no campo em aberto!')
  }
  else {
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
    values.push({
      name: newTaskInput.value
    })
    localStorage.setItem(localStoragekey, JSON.stringify(values))

    event.preventDefault();
  }





  const taskItem = document.createElement('label');
  taskItem.classList.add('task-item');

  const checkboxinput = document.createElement('input');
  checkboxinput.type = 'checkbox';

  const taskItemText = document.createElement('p');
  taskItemText.innerText = newTaskInput.value;



  const fakeChackboxInput = document.createElement('span');
  fakeChackboxInput.classList.add('fake-checkbox');

  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fa');
  checkIcon.classList.add('fa-check');



  const buttonTrash = document.createElement('button');

  const trashItems = document.createElement('i');
  trashItems.classList.add('fa-solid');
  trashItems.classList.add('fa-trash-can');


  taskItem.appendChild(checkboxinput);
  taskItem.appendChild(fakeChackboxInput);
  fakeChackboxInput.appendChild(checkIcon);
  taskItem.appendChild(taskItemText);
  taskItem.appendChild(buttonTrash);
  buttonTrash.appendChild(trashItems);
  taskBox.appendChild(taskItem);


  trashItems.addEventListener('click', deleteTask);



  checkboxinput.addEventListener('click', completeTask);


 

  newTaskInput.value = ""

  showValues();
  
};


function deleteTask(e) {
  e.target.parentElement.parentElement.remove();
  let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let index = values.findIndex(x => x.name === e.target.parentElement.innerText.trim());
  values.splice(index, 1);
  localStorage.setItem(localStoragekey, JSON.stringify(values));
  showValues();
  /*let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]");
  let index = values.findindex(x => x.name == deleteTask)
  values.splice(index,1)
  localStorage.setItem(localStoragekey, JSON.stringify(values))
  showValues()

}

function completeTask(e) {
  e.target.parentElement.classList.toggle('complete');
  console.log('complete')

}



function salve() {
  localStorage.getItem('addTask');
  localStorage.setItem('addTask'.JSON.stringify(salve))


  const dado = { salve };
  const dadosDoLocalstorage = JSON.parse(localStorage.getItem('dado'));

  console.log(dadosDoLocalstorage.none);
}

//

const palpapl = document.querySelector('.task-box');

function carregarTarefas() {
  const tarefas = JSON.parse(localStorage.getItem('addTask'));
}
  
 



  if (tarefas) {
      
    
    for (const tarefa of tarefas) {
          
        
    const taskItem = document.createElement('label');
          taskItem.

          classList.add('task-item');
    };
  }

  




 /*





















// eeesa nao apagar 
/*
const buttonNewTask = document.querySelector('.new-task button');
const taskBox = document.querySelector('.task-box');
const newTaskInput = document.querySelector('.new-task input');

buttonNewTask.addEventListener('click', addTask);

function addTask(event) {
  event.preventDefault();

  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  //checkbox
  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';

  const taskItemText = document.createElement('p');
  taskItemText.innerText = newTaskInput.value;

  //licheira 
  const buttonTrash = document.createElement('button');
  const trashItems = document.createElement('i');
  trashItems.classList.add('fa', 'fa-trash');

  //chackbox fake
  const fakeCheckboxInput = document.createElement('span');
  fakeCheckboxInput.classList.add('fake-checkbox');

  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fa', 'fa-check');

  taskItem.appendChild(checkboxInput);
  taskItem.appendChild(fakeCheckboxInput);
  fakeCheckboxInput.appendChild(checkIcon);
  taskItem.appendChild(taskItemText);
  taskItem.appendChild(buttonTrash);
  buttonTrash.appendChild(trashItems);
  taskBox.appendChild(taskItem);

  trashItems.addEventListener('click', deleteTask);

  checkboxInput.addEventListener('click', completeTask);

  newTaskInput.value = '';
  refreshTaskUsingLocalStorage();
} 

function deleteTask(event) {
  event.target.parentElement.remove();
}

function completeTask(event) {
  event.target.parentElement.classList.toggle('completed');
}

////aqui se inicia a tentativa de salvar no localStorage

const handleClick = (taskItemText) => {
  const taskItem = taskItemText.parentElement;

  const isCompleted = taskItemText.classList.contains('completed');

  const localStorageTasks = JSON.parse(localStorage.getItem('taskItems')) || [];

  localStorageTasks.push({ description: taskItemText.innerText, isCompleted });

  localStorage.setItem('taskItems', JSON.stringify(localStorageTasks));
};

const refreshTaskUsingLocalStorage = () => {
  const taskFromLocalStorage = JSON.parse(localStorage.getItem('taskItems'));

  if (!taskFromLocalStorage) return;

  for (const task of taskFromLocalStorage) {
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskItemText = document.createElement('p');
    taskItemText.innerText = task.description;

    if (task.isCompleted) {
      taskItemText.classList.add('completed');
    }

    taskItemText.addEventListener("click", () => handleClick(taskItemText));

    const buttonTrash = document.createElement
  }
};  
*/