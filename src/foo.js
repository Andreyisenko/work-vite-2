export function foo(tasks) {
  return `<ul class="list">${tasks
    .map(
      task =>
        `<li class="item">${task} <button class= "btnDelete">delete-task</button></li>`
    )
    .join('')}</ul>`;
}
