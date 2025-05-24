 burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });