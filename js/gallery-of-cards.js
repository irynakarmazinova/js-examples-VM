function slidesPlugin(activeSlide = 0) {
  // activeSlide = 0 - по умолчанию 1й эл всегда будет активен, если в аргумент не передадут другое число

  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  // for (const slide of slides) {
  //   slide.addEventListener('click', () => {
  //     clearActiveClasses();

  //     slide.classList.add('active');
  //   });
  // }

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      clearActiveClasses();

      slide.classList.add('active');
    });
  });

  function clearActiveClasses() {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  }
}

// при загрузке страницы сразу будет выбрать 5й эл
slidesPlugin(6);
