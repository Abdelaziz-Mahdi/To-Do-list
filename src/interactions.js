import { arr } from './index';

export function addNew() {
  const description = document.getElementById('addInput').value;
  const properIndex = arr.length + 1;
  if (description) {
    const task = {
      description: description,
      completed: false,
      index: properIndex,
    };
    arr.push(task);
  } else {
  }
}

function deletingTask() {}

function editingTask() {}
