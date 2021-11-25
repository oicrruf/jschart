const container = document.querySelector('div.container')

const example = [1, 2, 3]

example.forEach(() => {
  container.appendChild(document.createElement('canvas'))
})

// console.log(allCanvas)

const allCanvas = document.querySelectorAll('div.container canvas')

const drawChart = (element, source, i) => {

  fetch(source)
    .then(response => response.json())
    .then(data => {
      new Chart(element, data[i])
    }
    );
}

allCanvas.forEach((elem, i) => {

  drawChart(elem.getContext('2d'), 'data.json', i)
})
