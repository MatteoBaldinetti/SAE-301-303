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
      backgroundColor: colorMethode,
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
            display: false,
            position: false
          }
        }
    }
}) 

var ctx3 = document.getElementById('graph3').getContext('2d');

var data3 = {
  labels: Object.keys(cultures),
  datasets: [{
    label: 'My First Dataset',
    data: Object.values(cultures),
    backgroundColor: colorCulture,
    hoverOffset: 4
  }]
};

var graph3 = new Chart(ctx3, {
  type: "doughnut",
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
  labels: Object.keys(traitement),
  datasets: [{
    label: 'My First Dataset',
    data: Object.values(traitement),
    backgroundColor: colorTraitement,
    hoverOffset: 4
  }]
};

var graph4 = new Chart(ctx4, {
  type: "polarArea",
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