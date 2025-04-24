document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalBody = document.getElementById("modal-body");
  const closeButton = document.querySelector(".close-button");

  // Selecciona todas las imágenes dentro de los proyectos
  const projectImages = document.querySelectorAll(".grid-item img");

  projectImages.forEach(img => {
    img.addEventListener("click", function () {
      modalBody.innerHTML = `<img src="${img.src}" alt="${img.alt}" style="max-width:100%; max-height:100%;">`;
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


function openModal(project) {
  const modal = document.getElementById("imageModal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
    <div class="modal-info-card">
      <h3>${project.title}</h3>
      <ul>
        <li><strong>Client:</strong> ${project.client}</li>
        <li><strong>Genre:</strong> ${project.genre}</li>
        <li><strong>Tech:</strong> ${project.tech}</li>
        <li><strong>Duration:</strong> ${project.duration}</li>
        <li><strong>State:</strong> ${project.state}</li>
      </ul>
      <div class="modal-links">
        ${project.links.map(link => `<a href="${link.href}" target="_blank">${link.label}</a>`).join("<br>")}
      </div>
    </div>
  `;

  modal.style.display = "block";
}