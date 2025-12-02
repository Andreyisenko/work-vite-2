import './style.css';
import { tasks } from '../task';
import { foo } from './foo';
const formA = document.querySelector('#task');
// console.log(formA);
formA.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements.task.value);
  tasks.push(event.target.elements.task.value);
  wrap.innerHTML = foo(tasks);
  console.log(tasks);

  formA.reset();
}

const wrap = document.querySelector('#app');
wrap.innerHTML = foo(tasks);
