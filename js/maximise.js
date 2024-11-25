const maximiseButtonList = document.querySelectorAll(".maximiseButton");
const minimizeButtonList = document.querySelectorAll(".minimizeButton");
const chartContainer1 = document.getElementById("chartContainer1");
const chartContainer2 = document.getElementById("chartContainer2");
const graphJSFile = document.getElementById("graphJSFile")

function setupListener() {
    for (let i=0; i<maximiseButtonList.length; i++) {
        maximiseButtonList[i].addEventListener("click", function() {changeDisplay(maximiseButtonList[i])}, false);
    }
    for (let i=0; i<minimizeButtonList.length; i++) {
        minimizeButtonList[i].addEventListener("click", function() {changeDisplay(minimizeButtonList[i])}, false);
    }
}

function getParent(maximiseButton) {
    return maximiseButton.parentElement;
}

function getGraph(maximiseButton) {
    let parent = getParent(maximiseButton);
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i].className != undefined) {
            if (parent.childNodes[i].className.includes("chartBox")) {
                return parent.childNodes[i].childNodes[1];
            }
        }
    }
}

function displayChartContainer() {
    chartContainer1.classList.toggle("d-none");
    chartContainer2.classList.toggle("d-none");
}

function changeDisplay(maximiseButton) {
    let graph = getGraph(maximiseButton);
    let replaceGraph = document.getElementById("replaceGraph");
    replaceGraph.id = graph.id;
    graph.id = "replaceGraph";
    destroyGraph()
    newScript = document.createElement('script');
    newScript.src = graphJSFile.src;
    document.body.appendChild(newScript);
    displayChartContainer()
}

window.addEventListener("load", setupListener);