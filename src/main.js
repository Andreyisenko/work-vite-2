import './style.css';
import { tasks } from '../task';
import { foo } from './foo';
const formA = document.querySelector('#task');
const wrap = document.querySelector('#app');
formA.addEventListener('submit', handleSubmit);
const searchInp = document.querySelector('.searchTask');

// console.log(localStorage.getItem('dog'));
searchInp.value = localStorage.getItem('dog');
searchInp.addEventListener('input', handleSearchTask);

function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.target.elements.task.value);
  tasks.push(event.target.elements.task.value);
  wrap.innerHTML = foo(tasks);

  formA.reset();
}

function handleSearchTask(event) {
  // console.log(searchInp.value);
  const filterTask = tasks.filter(task => task.includes(event.target.value));
  wrap.innerHTML = foo(filterTask);
}

wrap.innerHTML = foo(tasks);
const taskList = document.querySelector('.list');
taskList.addEventListener('click', handleDeleteTask);
function handleDeleteTask(event) {
  console.log(event.target);
}
