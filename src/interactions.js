/* eslint-disable import/no-cycle */
import defaultExport from './index.js';

const container = document.getElementById('tasks-list');

function saveToLocalStorage() {
  localStorage.setItem('arr', JSON.stringify(defaultExport));
}

export function addNew() {
  const description = document.getElementById('addInput').value;
  const properIndex = defaultExport.length + 1;
  if (description) {
    const task = {
      description,
      completed: false,
      index: properIndex,
    };
    defaultExport.push(task);
    saveToLocalStorage();
  }
}

export async function deletingTask() {
  const { arrayIndex } = await import('./index.js');
  defaultExport.splice(arrayIndex, 1);
  defaultExport.forEach((element, index) => {
    element.index = index + 1;
  });
  const { removeAllTasks } = await import('./index.js');
  const { component } = await import('./index.js');
  saveToLocalStorage();
  removeAllTasks(container);
  component();
}
