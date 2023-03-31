import './style.css';

import { addNew } from './interactions';

export const arr = [];
const container = document.getElementById('tasks-list');
const addInput = document.getElementById('addInput');
const addBtn = document.getElementById('addbtn');

function removeAllTasks(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

addBtn.addEventListener('click', () => {
  addNew();
  removeAllTasks(container);
  component();
  document.getElementById('addInput').placeholder = 'Add to your list...';
  document.getElementById('addInput').value = '';
});

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addBtn.click();
  }
});

function component() {
  arr.forEach((card) => {
    const element = document.createElement('li');
    element.classList.add(`i${card.index}`);
    element.innerHTML += `
      <input type="checkbox" name="task${card.index}">
      <label for="task${card.index}">${card.description}</label>
      <textarea  id="task${card.index}" name="inputT" class="inputT">${card.description}</textarea>
      <span class="material-symbols-outlined ic-vDots">more_vert</span>
    `;
    container.appendChild(element);
  });
}

window.onload = () => {
  component();
};
