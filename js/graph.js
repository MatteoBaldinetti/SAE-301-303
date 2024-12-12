function randomColorGenerator(start, end) {
  return (Math.floor(Math.random() * (end + 1 - start) + start));
}

function generateTupleColor() {
  return ('rgb(' + randomColorGenerator(0,255) + ',' + randomColorGenerator(0,255) + ',' + randomColorGenerator(0,255) + ')');
}

function generateColorsArray(arrayValues) {
  let colorsArray = [];
  for (let i=0; i<arrayValues.length; i++) {
    colorsArray.push(generateTupleColor());
  }
  return colorsArray;
}

var ctx = document.getElementById('graph1').getContext('2d');

var data = {
    labels: Object.keys(methodes),
    datasets: [{
      label: 'My First Dataset',
      data: Object.values(methodes),
      backgroundColor: generateColorsArray(Object.keys(methodes)),
      hoverOffset: 4
    }]
};

var graph1 = new Chart(ctx, {
    type: "pie",
    data: data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: position=="graph1" ? true : false,
            position: position=="graph1" ? "right" : "top"
          }
        }
    }
}) 

var ctx2 = document.getElementById('graph2').getContext('2d');

var data2 = {
    labels: Object.keys(avis),
    datasets: [{
      label: 'My First Dataset',
      data: Object.values(avis),
      backgroundColor: [
        'rgba(125, 125, 125, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 125, 0, 0.2)',
        'rgba(0, 255, 0, 0.2)'
      ],
      borderColor: [
        'rgb(125, 125, 125)',
        'rgb(255, 0, 0)',
        'rgb(255, 125, 0)',
        'rgb(0, 255, 0)'
      ],
      borderWidth: 1
    }]
  };

var graph2 = new Chart(ctx2, {
    type: "bar",
    data: data2,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: position=="graph2" ? true : false,
            position: position=="graph2" ? "right" : "top"
          }
        }
    }
}) 

var ctx3 = document.getElementById('graph3').getContext('2d');

var data3 = {
  labels: ["January", "February", "March", "April", "Mai", "June", "July"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

var graph3 = new Chart(ctx3, {
  type: "line",
  data: data3,
  options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: position=="graph3" ? true : false,
          position: position=="graph3" ? "right" : "top"
        }
      }
  }
})

var ctx4 = document.getElementById('graph4').getContext('2d');

var data4 = {
  labels: Object.keys(cultures),
  datasets: [{
    label: 'My First Dataset',
    data: Object.values(cultures),
    backgroundColor: generateColorsArray(Object.keys(cultures)),
    hoverOffset: 4
  }]
};

var graph4 = new Chart(ctx4, {
  type: "pie",
  data: data4,
  options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: position=="graph4" ? true : false,
          position: position=="graph4" ? "right" : "top"
        }
      }
  }
}) 

function destroyGraph() {
  graph1.destroy()
  graph2.destroy()
  graph3.destroy()
  graph4.destroy()
}