const formButtons = document.querySelectorAll('.form');

formButtons.forEach(el => {
  el.addEventListener('submit', (e)=> {
    e.preventDefault();
    const input = el.querySelector('.form__input');
    const succes = el.querySelector('.succes');
    input.value = '';
    succes.classList.add('active');
    setTimeout(() => {
      succes.classList.remove('active');
    }, 1500);
  });
})
