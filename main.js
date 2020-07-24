/*const findItems = document.querySelectorAll('#find');

const removeClick = () => {
  findItems.forEach((item) => {
    if (item.className === 'click-item') {
      item.className = 'find-item';
    }
  });
};

function addClick(el) {
  removeClick();
  if (this.className === 'find-item') {
    this.className = 'click-item';
  }
}

findItems.forEach((item) => item.addEventListener('click', addClick()));
