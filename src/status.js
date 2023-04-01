/* eslint-disable import/no-cycle */
import defaultExport from './index.js';

const container = document.getElementById('tasks-list');
function saveToLocalStorage() {
  localStorage.setItem('arr', JSON.stringify(defaultExport));
}
export default async function clearAllComp() {
  saveToLocalStorage();
  const { removeAllTasks } = await import('./index.js');
  const { component } = await import('./index.js');
  removeAllTasks(container);
  component();
}
