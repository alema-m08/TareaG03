// script.js

// Datos de ventas en formato JSON (simulando la carga desde un archivo)
const ventas = {
  2023: {
    Enero: 2000,
    Febrero: 1500,
    Marzo: 1800,
    Abril: 2200,
    Mayo: 2400,
    Junio: 2500,
    Julio: 2100,
    Agosto: 2300,
    Septiembre: 2000,
    Octubre: 2100,
    Noviembre: 2200,
    Diciembre: 2600,
  },
  2024: {
    Enero: 2200,
    Febrero: 1600,
    Marzo: 2000,
    Abril: 2300,
    Mayo: 2600,
    Junio: 2700,
    Julio: 2400,
    Agosto: 2500,
    Septiembre: 2200,
    Octubre: 2400,
    Noviembre: 2500,
    Diciembre: 2800,
  },
};

// Obtener el contexto del canvas para la gráfica
const ctx = document.getElementById("salesChart").getContext("2d");

// Crear la gráfica inicial
let chart = new Chart(ctx, {
  type: "line", // Tipo de gráfica: línea
  data: {
    labels: Object.keys(ventas["2023"]), // Los meses
    datasets: [
      {
        label: "Ventas 2023",
        data: Object.values(ventas["2023"]), // Ventas de 2023
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Función para actualizar la gráfica según el año seleccionado
function updateChart(year) {
  chart.data.labels = Object.keys(ventas[year]); // Actualizar los meses
  chart.data.datasets[0].data = Object.values(ventas[year]); // Actualizar las ventas
  chart.data.datasets[0].label = `Ventas ${year}`; // Cambiar la etiqueta
  chart.update(); // Redibujar la gráfica
}

// Detectar cambios en el selector de año
document.getElementById("year-selector").addEventListener("change", (event) => {
  const selectedYear = event.target.value;
  updateChart(selectedYear); // Actualizar la gráfica al seleccionar un nuevo año
});
