const maximiseButtonList = document.querySelectorAll(".maximiseButton");
const minimizeButtonList = document.querySelectorAll(".minimizeButton");
const chartContainer1 = document.getElementById("chartContainer1");
const chartContainer2 = document.getElementById("chartContainer2");
var position = null

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

function reloadGraph() {
    destroyGraph()
    let graphJSFile = document.getElementById("graphJSFile")
    graphJSFile.remove()
    newScript = document.createElement('script');
    newScript.id = graphJSFile.id;
    newScript.src = graphJSFile.src;
    document.body.appendChild(newScript);
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
    if (position == null) {
        position = replaceGraph.id
    } else {
        position = null;
    }
    reloadGraph();
    displayChartContainer()
}

window.addEventListener("load", setupListener);