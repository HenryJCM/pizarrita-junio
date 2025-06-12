const mensajes = [
  "Eres mi sol en días nublados ",
  "Tu sonrisa me enamora cada día",
  "Contigo, todo es mejor",
  "Gracias por existir",
  "Eres mi lugar favorito",
  "Nuestro amor es infinito",
  "Cada momento contigo es mágico",
  "Te amo más que ayer y menos que mañana",
];

const pizarra = document.getElementById('pizarra');

// Crear los post-its
mensajes.forEach((texto, i) => {
  const nota = document.createElement('div');
  nota.className = 'postit';
  nota.style.setProperty('--rot', Math.random());
  nota.innerText = texto;

  nota.addEventListener('click', () => {
    if (nota.classList.contains('enlarged')) {
      // Si está ampliado, lo eliminamos
      nota.remove();
    } else {
      // Agrandarlo
      document.querySelectorAll('.postit').forEach(p => p.classList.remove('enlarged'));
      nota.classList.add('enlarged');
    }
  });

  pizarra.appendChild(nota);
});
