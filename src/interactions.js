import { arr } from './index.js';

const container = document.getElementById('tasks-list');

export function saveToLocalStorage() {
  localStorage.setItem('arr', JSON.stringify(arr));
}

export function addNew() {
  const description = document.getElementById('addInput').value;
  const properIndex = arr.length + 1;
  if (description) {
    const task = {
      description,
      completed: false,
      index: properIndex,
    };
    arr.push(task);
    saveToLocalStorage();
  }
}

export async function deletingTask() {
  const { arrayIndex } = await import('./index.js');
  arr.splice(arrayIndex, 1);
  arr.forEach((element, index) => {
    element.index = index + 1;
  });
  const { removeAllTasks } = await import('./index.js');
  const { component } = await import('./index.js');
  saveToLocalStorage();
  removeAllTasks(container);
  component();
}

export async function editingTask() {
  const { removeAllTasks } = await import('./index.js');
  const { component } = await import('./index.js');
  saveToLocalStorage();
  removeAllTasks(container);
  component();
}
