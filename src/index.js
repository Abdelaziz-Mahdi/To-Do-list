export let arr = [];
export let container = document.getElementById('tasks-list');
const addInput = document.getElementById('addInput');
const addBtn = document.getElementById('addbtn');
export let arrayIndex = 0;

export function removeAllTasks(parent) {
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

export function component() {
  arr.forEach((card, n) => {
    const element = document.createElement('li');
    element.setAttribute('id', `i${card.index}`);
    element.innerHTML += `
      <input type="checkbox" name="task${card.index}">
      <label for="task${card.index}">${card.description}</label>
      <textarea  id="task${n}" name="inputT" class="inputT">${card.description}</textarea>
      <button type="button" id="removeTask">
      <span id='delete-${n}' class="material-symbols-outlined  delete-ic">delete</span>
      <span class="material-symbols-outlined ic-vDots">more_vert</span>
      </button>
    `;
    element.addEventListener('mouseenter', () => {
      const deleteIC = document.getElementById(`delete-${n}`);
      if (deleteIC) {
        deleteIC.style.display = 'block';
      }
      element.querySelector('.ic-vDots').style.display = 'none';
      element.style.backgroundColor = 'yellow';
    });
    element.addEventListener('focusout', () => {
      const deleteIC = document.getElementById(`delete-${n}`);
      if (deleteIC) {
        deleteIC.style.display = 'none';
      }
      element.querySelector('.ic-vDots').style.display = 'block';
      element.style.backgroundColor = 'white';
    });
    element.querySelector('#removeTask').addEventListener('click', () => {
      arrayIndex = `${card.index}` - 1;
      deletingTask();
      element.querySelector('.ic-vDots').style.display = 'none';
    });
    let z = element.querySelector('.inputT');
    z.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        arr[n].description = z.value;
        editingTask();
      }
    });
    container.appendChild(element);
  });
}

window.onload = () => {
  if (localStorage.getItem('arr')) {
    arr = JSON.parse(localStorage.getItem('arr'));
  }
  component();
};
import './style.css';

import { addNew, deletingTask, editingTask } from './interactions';
