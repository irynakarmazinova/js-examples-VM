const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

// Событие dragstart вызывается, когда пользователь начинает перетаскивать выделенный элемент или текст.
// Событие dragend запускается, когда операция перетаскивания завершается (отпусканием кнопки мыши или нажатием клавиши escape).

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover); // Событие dragover запускается, когда элемент или выделенный текст перетаскивают над допустимой целью перетаскивания(эл находится над placeholder-ом)
  placeholder.addEventListener('dragenter', dragenter); // Событие dragenter запускается, когда перетаскиваемый элемент или выделенный текст попадает в допустимую цель перетаскивания(заходим на территорию placeholder-а)
  placeholder.addEventListener('dragleave', dragleave); // Событие dragleave запускается, когда перетаскиваемый элемент или выделенный текст покидает допустимую цель перетаскивания(перетащили, но вышли от туда)
  placeholder.addEventListener('drop', dragdrop); // когда отпустили
}

function dragstart(e) {
  //   console.log('start', e.target);

  e.target.classList.add('hold');

  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function dragend(e) {
  //   console.log('end');

  //   e.target.className = 'item';
  e.target.classList.remove('hold', 'hide');
}

function dragover(e) {
  //   console.log('dragover');

  e.preventDefault();
}
function dragenter(e) {
  //   console.log('dragenter');

  e.target.classList.add('hovered');
}
function dragleave(e) {
  //   console.log('dragleave');

  e.target.classList.remove('hovered');
}
function dragdrop(e) {
  //   console.log('dragdrop');

  e.target.classList.remove('hovered');
  e.target.append(item);
}
