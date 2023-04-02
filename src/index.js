/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */

import './style.css';

import defaultExport from './status.js';

const container = document.getElementById('tasks-list');
const addInput = document.getElementById('addInput');
const addBtn = document.getElementById('addbtn');
const clearAll = document.getElementById('remove');

let arr = [];
export { arr as default };
export let arrayIndex = 0;

function saveToLocalStorage() {
  localStorage.setItem('arr', JSON.stringify(arr));
}

export function removeAllTasks(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

addInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addBtn.click();
  }
});

clearAll.addEventListener('click', async () => {
  const removeCompleted = arr.filter((arr) => arr.completed === false);
  arr = removeCompleted;
  defaultExport();
});

export function component() {
  if (Array.isArray(arr) && arr.length > 0) {
    arr.forEach(async (card, n) => {
      const element = document.createElement('li');
      element.setAttribute('id', `i${card.index}`);
      element.innerHTML += `
      <input id="check${n}" type="checkbox" name="task${card.index}">
      <label for="task${card.index}">${card.description}</label>
      <textarea  id="task${n}" name="inputT" class="inputT">${card.description}</textarea>
      <button type="button" id="removeTask">
      <span id='delete-${n}' class="material-symbols-outlined  delete-ic">delete</span>
      <span class="material-symbols-outlined ic-vDots">more_vert</span>
      </button>
    `;
      element
        .querySelector(`#check${n}`)
        .addEventListener('click', async () => {
          const sta = element.querySelector(`#check${n}`).checked;
          if (sta) {
            arr[n].completed = true;
          } else {
            arr[n].completed = false;
          }
          saveToLocalStorage();
        });

      element.addEventListener('mouseenter', () => {
        const deleteIC = document.getElementById(`delete-${n}`);
        if (deleteIC) {
          deleteIC.style.display = 'block';
        }
        element.querySelector('.ic-vDots').style.display = 'none';
        element.style.backgroundColor = 'yellow';
      });
      element.addEventListener('mouseleave', () => {
        const deleteIC = document.getElementById(`delete-${n}`);
        if (deleteIC) {
          deleteIC.style.display = 'none';
        }
        element.querySelector('.ic-vDots').style.display = 'block';
        element.style.backgroundColor = 'white';
      });
      element
        .querySelector('#removeTask')
        .addEventListener('click', async () => {
          arrayIndex = `${card.index}` - 1;
          const { deletingTask } = await import('./interactions.js');
          deletingTask();
          element.querySelector('.ic-vDots').style.display = 'none';
        });
      const z = element.querySelector('.inputT');
      z.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          arr[n].description = z.value;
          saveToLocalStorage();
          removeAllTasks(container);
          component();
        }
      });
      container.appendChild(element);
    });
  }
}

addBtn.addEventListener('click', async () => {
  const { addNew } = await import('./interactions.js');
  addNew();
  removeAllTasks(container);
  component();
  document.getElementById('addInput').placeholder = 'Add to your list...';
  document.getElementById('addInput').value = '';
});

window.onload = () => {
  if (localStorage.getItem('arr')) {
    arr = JSON.parse(localStorage.getItem('arr'));
  }
  component();
};
