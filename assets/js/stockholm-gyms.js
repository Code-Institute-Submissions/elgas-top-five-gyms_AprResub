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
    },
    {
        name:'Nordic Wellness Odenplan', 
        href:'https://nordicwellness.se/vara-klubbar/stockholm/stockholm-odenplan/'
    },
    {
        name:'Nordic Wellness Drottninggatan', 
        href:'https://nordicwellness.se/vara-klubbar/stockholm/stockholm-drottninggatan/'
    }
];

let text = "";

// Iterate through the gyms

for (gyms of listOfGymsStockholm){
let addButtons = `
    <button type="button" class="btn btn-light"><a href="${gyms.href}" target="_blank">${gyms.name}</a></button>
    `;
    text += addButtons;
}

document.getElementById("gym").innerHTML = text;