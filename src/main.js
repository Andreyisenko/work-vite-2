import './style.css';
import { tasks } from '../task';
import foo from './foo';
// import { tot } from './foo';
import * as modF from './foo';
// console.log(modF);
// console.log(modF.tot);
// console.log(modF.sum);

const formA = document.querySelector('#task');
const wrap = document.querySelector('#app');
const wraps = document.querySelector('#appi');
console.log(wraps);

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
  if (event.currentTarget.children) {
  }
  // console.log(Array.isArray(event.currentTarget.children));
  // console.log(event.currentTarget.children.length);
}

let Tasks = ['eat', 'sleep', 'code'];
const ttt = Tasks.splice(1, 1, 'ss'); // видаляє 1 елемент з індексу 1
// console.log(ttt); // ["eat", "code"]
// console.log(Tasks); // ["eat", "code"]

Tasks.splice(1, 0, 'walk'); // додає "walk" на індекс 1
// console.log(Tasks); // ["eat", "walk", "code"]
console.log(55);
// const url = 'https://drive.usercontent.google.com';
// fetch(url)
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const photo = document.createElement('img');
// photo.classList.add('imago');
// photo.src =
//   'https://drive.usercontent.google.com/uc?id=1mEfP9LUDu7VbcsyNj2HlzBs5ZeyMFZUE';

// photo.alt = 'YANA';
// wrap.prepend(photo);

const photo = document.createElement('img');
photo.classList.add('imago');

// photo.src = 'https://drive.google.com/uc?id=1mEfP9LUDu7VbcsyNj2HlzBs5ZeyMFZUE';
// photo.src = 'https://picsum.photos/400';
photo.src = './src/photo/KETI9910.jpg';

photo.alt = 'YANA';

wraps.append(photo);
