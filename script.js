// script.js

// Cargar el archivo JSON de los planetas
fetch("planetas.json")
  .then((response) => response.json())
  .then((data) => {
    const slider = document.getElementById("slider");
    const infoContent = document.getElementById("info-content");
    const detallesContent = document.getElementById("detalles-content");

    // Crear el slider de imágenes
    data.forEach((planeta, index) => {
      const img = document.createElement("img");
      img.src = planeta.imagen;
      img.alt = planeta.nombre;
      img.addEventListener("click", () => mostrarInfo(planeta));
      slider.appendChild(img);
    });

    // Mostrar la información y detalles cuando se hace clic en un planeta
    function mostrarInfo(planeta) {
      // Pestaña de Información
      infoContent.innerHTML = `
        <h2>${planeta.nombre}</h2>
        <img src="${planeta.imagen}" alt="${planeta.nombre}" style="max-width: 200px;">
        <p>Temperatura media: ${planeta.temperatura}</p>
        <p>Distancia al Sol: ${planeta.distancia}</p>
      `;

      // Pestaña de Detalles
      detallesContent.innerHTML = `
        <p><strong>Masa:</strong> ${planeta.masa}</p>
        <p><strong>Distancia al Sol:</strong> ${planeta.distancia}</p>
        <p><strong>Temperatura:</strong> ${planeta.temperatura}</p>
      `;

      // Activar la pestaña de información por defecto
      activarPestaña("info");
    }

    // Manejo de pestañas
    function activarPestaña(tab) {
      const tabs = document.querySelectorAll(".tab-btn");
      const contents = document.querySelectorAll(".tab-content");

      tabs.forEach((tabBtn) => tabBtn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      if (tab === "info") {
        document.getElementById("tab-info").classList.add("active");
        document.getElementById("info-content").classList.add("active");
      } else {
        document.getElementById("tab-detalles").classList.add("active");
        document.getElementById("detalles-content").classList.add("active");
      }
    }

    // Escuchar los clics en las pestañas
    document
      .getElementById("tab-info")
      .addEventListener("click", () => activarPestaña("info"));
    document
      .getElementById("tab-detalles")
      .addEventListener("click", () => activarPestaña("detalles"));
  })
  .catch((error) =>
    console.error("Error al cargar los datos del JSON:", error)
  );
