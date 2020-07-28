const toggle = document.getElementById('toggle');
const flexContainer = document.getElementById('flexy')

toggle.addEventListener('change', e => {
  flexContainer.classList.toggle('show-monthly');
});
