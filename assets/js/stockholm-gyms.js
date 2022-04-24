const listOfGymsStockholm = [
    {
        name:'SATS SoFo', 
        href:'https://www.sats.se/gym/stockholm/sats-sofo/'
    },
    {
        name:'SATS Sportpalatset', 
        href:'https://www.sats.se/gym/stockholm/sats-sportpalatset/'
    },
    {
        name:'SATS Stureplan', 
        href:'https://www.sats.se/gym/stockholm/sats-stureplan/'
    }
];

let text = "";

// Iterate through the gyms

for (gyms of listOfGymsStockholm){
let newbuttons = `
    <button type="button" class="btn btn-light"><a href="${listOfGymsStockholm.href}" target="_blank">${listOfGymsStockholm.name}</a></button>
    `;
    text += newbuttons;
}

document.getElementById("gym").innerHTML = text;



















//let text = "";

//for (let x in listOfGymsStockholm) {
//  text += [x] + "<br>";
//}

//document.getElementById("gym").innerHTML = text;
