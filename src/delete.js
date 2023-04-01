const container = document.getElementById('tasks-list');

import { arr } from './index.js';

function saveToLocalStorage() {
  localStorage.setItem('arr', JSON.stringify(arr));
}
export async function deletingTask() {
  let { arr } = await import('./index.js');
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
