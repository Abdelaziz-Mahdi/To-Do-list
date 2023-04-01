import { arr } from './index.js';

function saveToLocalStorage() {
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
