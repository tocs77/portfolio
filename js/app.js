(function () {
  const changer = document.getElementsByClassName('changer');
  console.log('Selected ', changer);
  changer[0].addEventListener('click', () => {
    changer[0].classList.toggle('red-back');
  });
})();
