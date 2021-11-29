const container = document.querySelector('#charts-container')

const drawCanvas = (charts) => {
  charts.forEach(() => {
    container.appendChild(document.createElement('canvas'))
  })
  drawChart(charts)
};

const drawChart = (charts) => {
  let allCanvas = document.querySelectorAll('#charts-container canvas')
  allCanvas.forEach((element, i) => {
    new Chart(element.getContext('2d'), charts[i])
  })
};

const getData = (file) => {
  fetch(file)
    .then(response => response.json())
    .then(data => {
      drawCanvas(data)
    }
    );
}

getData('data.json')