function filtrar(categoria) {
  const cards = document.querySelectorAll('[data-cat]');

  cards.forEach(function(card) {
    if (categoria === 'todo' || card.dataset.cat.includes(categoria)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
function toggleMenu() {
  const nav = document.getElementById('principal');
  nav.classList.toggle('abierto');
}
