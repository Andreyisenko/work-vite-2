function foo(tasks) {
  return `<ul class="list">${tasks
    .map(
      task =>
        `<li class="item">${task} <button class= "btnDelete">delete-task</button></li>`
    )
    .join('')}</ul>`;
}
//  console.log('fot');

export const tot = 10;
export const sum = 55;
export default foo;
function goo(params) {
  // console.log('goo');
}
goo();

const rrr = () => {
  // console.log('JR');
};
// rrr();
setTimeout(rrr, 2000);
// console.log(Date());
// console.log(Date.now());
// const data = new Date();
// console.log(data);
// console.log(data.getDay());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(data);
const date1 = Date.now();
// console.log(date1);
// const timerId = setTimeout(() => {
//   const time2 = Date.now();
//   console.log(time2 - date1);
// }, 2000);

// const intervalID = setInterval(() => {
//   const time3 = Date.now();
//   console.log(time3 - date1);
// }, 2000);
