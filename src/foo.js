export function foo(tasks) {
  return `<ul>${tasks.map(task => `<li>${task}</li>`).join('')}</ul>`;
}
