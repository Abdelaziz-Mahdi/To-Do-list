import { arr, arrayIndex, component, container, removeAllTasks } from './index';

export function addNew() {
  const description = document.getElementById('addInput').value;
  const properIndex = arr.length + 1;
  if (description) {
    const task = {
      description: description,
      completed: false,
      index: properIndex,
    };
    arr.push(task);
  }
}

export function deletingTask() {
  arr.splice(arrayIndex, 1);
  arr.forEach((element, index) => {
    element.index = index + 1;
  });
  console.log(arr);
  removeAllTasks(container);
  component();
}
