const slides = document.querySelectorAll('.slide');

document.body.style.backgroundColor = '#cdc1c5';

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active');
  });
}

// slides.forEach(slide => {
//   slide.addEventListener('click', () => {
//     clearActiveClasses();

//     slide.classList.add('active');
//   });
// });

function clearActiveClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}
