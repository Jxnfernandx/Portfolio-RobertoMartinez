document.querySelectorAll('nav a')
  .forEach(e => e.addEventListener('click', function () {
    const dataId = e.dataset.id;
    change(dataId);
    // Add text color change to the clicked link
    document.querySelectorAll('nav a').forEach(a => a.style.color = '');
    e.style.color = 'red'; // Change the color of the clicked link to red
  }));

function change(n) {
  let panels = document.querySelectorAll('main div')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')
}
