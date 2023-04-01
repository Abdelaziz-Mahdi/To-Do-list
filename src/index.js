import './style.css';

const container = document.getElementById('tasks-list');
const addInput = document.getElementById('addInput');
const addBtn = document.getElementById('addbtn');

export let arr = [];
export let arrayIndex = 0;

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
    element.addEventListener('mouseleave', () => {
      const deleteIC = document.getElementById(`delete-${n}`);
      if (deleteIC) {
        deleteIC.style.display = 'none';
      }
      element.querySelector('.ic-vDots').style.display = 'block';
      element.style.backgroundColor = 'white';
    });
    element.querySelector('#removeTask').addEventListener('click', async () => {
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
        const { editingTask } = await import('./interactions.js');
        editingTask();
      }
    });
    container.appendChild(element);
  });
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
