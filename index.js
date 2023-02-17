if (new URLSearchParams(location.search).has('overflow-auto')) {
  const box = document.querySelector('.box')
  box.classList.add('overflow-auto')
}