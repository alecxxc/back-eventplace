// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const listaEventos = document.getElementById('lista-eventos');

  fetch('http://localhost:3000/admin/events')
    .then(res => res.json())
    .then(data => {
      data.forEach(evento => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${evento.name}</strong> - ${evento.category}<br>
          <em>${new Date(evento.date).toLocaleDateString()}</em><br>
          Lugar: ${evento.place} <br>
          Director: ${evento.director}
          <hr>
        `;
        listaEventos.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Error al cargar los eventos:", err);
    });
});
