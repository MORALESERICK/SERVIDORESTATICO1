let posts = [
  { userId: 1, id: 1, title: "Título 1", body: "Contenido del post 1" },
  { userId: 1, id: 2, title: "Título 2", body: "Contenido del post 2" },
  // Agrega más si necesitas
];

let pagina = 1;
const porPagina = 10;

function getPosts() {
  mostrarPagina(pagina);
}

function mostrarPagina(numPagina) {
  const totalPaginas = Math.ceil(posts.length / porPagina);
  if (numPagina < 1) numPagina = 1;
  if (numPagina > totalPaginas) numPagina = totalPaginas;

  const inicio = (numPagina - 1) * porPagina;
  const fin = inicio + porPagina;
  const datosPagina = posts.slice(inicio, fin);

  const tbody = document.getElementById("tbl_posts");
  tbody.innerHTML = datosPagina.map(p => `
    <tr>
      <td>${p.userId}</td>
      <td>${p.id}</td>
      <td>${p.title}</td>
      <td>
        <button onclick="verDetalles(${p.id})">Ver</button>
        <button onclick="editar(${p.id})">Editar</button>
        <button onclick="eliminar(${p.id})">Eliminar</button>
      </td>
    </tr>
  `).join('');

  document.getElementById("paginaActual").innerText = 
    `Página ${numPagina} de ${totalPaginas}`;

  pagina = numPagina;
}

function siguientePagina() { mostrarPagina(pagina + 1); }
function anteriorPagina() { mostrarPagina(pagina - 1); }

function verDetalles(id) {
  const post = posts.find(p => p.id === id);
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <p><strong>ID:</strong> ${post.id}</p>
    <p><strong>User ID:</strong> ${post.userId}</p>
    <p><strong>Título:</strong> ${post.title}</p>
    <p><strong>Contenido:</strong> ${post.body}</p>
  `;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }
function editar(id) { alert(`Editar post ${id}`); }
function eliminar(id) { alert(`Eliminar post ${id}`); }

getPosts();
