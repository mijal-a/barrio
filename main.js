function filtrar(categoria) {
  const cards = document.querySelectorAll('article[data-cat]');

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
function toggleInfo(id) {
  const info = document.getElementById(id);
  info.classList.toggle('visible');
}
