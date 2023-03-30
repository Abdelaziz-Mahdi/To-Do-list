import './style.css';

const arr = [
  {
    description: 'Study JS',
    completed: 'false',
    index: 1,
  },
  {
    description: 'Study HTML',
    completed: 'false',
    index: 2,
  },
  {
    description: 'Study CSS',
    completed: 'false',
    index: 3,
  },
];

const container = document.getElementById('tasks-list');

function component() {
  arr.forEach((card) => {
    const element = document.createElement('li');
    element.classList.add(`${card.index}`);
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
