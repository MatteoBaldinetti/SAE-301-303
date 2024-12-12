const projectSelector = document.getElementById("projectSelector");
var map = {};
var methodes = {};
var cultures = {};
var avis = {
    "Aucun avis émis": 0,
    "Insatisfaisant": 0,
    "Mitigé": 0,
    "Bon": 0
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = readCSVFile;
xhttp.open("GET", './assets/csv/data.csv')
xhttp.send();

function readCSVFile() {
    if (this.readyState == 4 && this.status == 200) {
        var file = this.response
        // Supprimer tous les caractères "\r" du contenu
        const contenuSansCR = file.replace(/\r/g, '');

        // Diviser le contenu en lignes
        const lignes = contenuSansCR.split('\n');

        // Initialiser le tableau pour stocker les données
        const tableauCSV = lignes.map(ligne => ligne.split(';'));
        array = tableauCSV;
        for (var i=1; i<array.length; i++) {
            if (map[array[i][18]] != undefined){
                map[array[i][18]].push([array[i][0], array[i][15], array[i][13]]);
            } else {
                map[array[i][18]] = [[array[i][0], array[i][15], array[i][13]]];
            }    
        }
        console.log(map)
        createOptionsSelector(map, projectSelector);
        //Nom des méthodes juste le nombre en camembert (0)
        //Différente culture utilisées en pourcentage en camembert (15)
        //Avis (13)
        //Détails
        // filière
        // plein terre ou pas
        // le lieu
        // période
    }  
};

function displayData() {
    getDatasByProjects(document.getElementById("projectSelector").value);
    getPourcent(cultures, Object.values(cultures));
    reloadGraph();
    document.getElementById("title").innerHTML = document.getElementById("projectSelector").value; 
    console.log(methodes)
    console.log(cultures)
    console.log(avis)
}

function createOptionsSelector(map, selector) {
    let i = 0;
    for (var [key, value] of Object.entries(map)) {
        newOption = document.createElement("option");
        newOption.innerHTML = key;
        newOption.value = key;
        selector.appendChild(newOption);
        i++;
    }
}

function getDatasByProjects(value) {
    methodes = {};
    cultures = {};
    avis = {
        "Aucun avis émis": 0,
        "Insatisfaisant": 0,
        "Mitigé": 0,
        "Bon": 0
    };
    for (let i=0; i<map[value].length; i++) {
        if (methodes[map[value][i][0]] != undefined){
            methodes[map[value][i][0]] += 1;
        } else {
            methodes[map[value][i][0]] = 1;
        }    
        if (cultures[map[value][i][1]] != undefined){
            cultures[map[value][i][1]] += 1;
        } else {
            if (map[value][i][1].includes(",")) {
                let splitValues = splitStr(map[value][i][1]);
                for (let j=0; j<splitValues.length; j++) {
                    if (cultures[splitValues[j]] != undefined){
                        cultures[splitValues[j]] += 1;
                    } else {
                        cultures[splitValues[j]] = 1;
                    } 
                }
            } else {
                cultures[map[value][i][1]] = 1;
            }
        }   
        if (avis[map[value][i][2]] != undefined){
            avis[map[value][i][2]] += 1;
        } else {
            avis[map[value][i][2]] = 1;
        }  
    }
}


function splitStr(string) {
    var separateValues = string.split(", ");
    var newValues = [];
    for (let i=0; i<separateValues.length ; i++) {
        newValues.push(upperFirstLetter(separateValues[i]));
    }
    return newValues;
}

function upperFirstLetter(string) {
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + string.slice(1);
}

function getPourcent(map, n) {
    let sum = 0;
    for (let i=0; i<n.length; i++) {
        sum += n[i];
    }
    for (var key in map){
        value = map[key] * 100 / sum
        value = Math.round(value * 1e2 ) / 1e2;
        map[key] = (value)
    }
}