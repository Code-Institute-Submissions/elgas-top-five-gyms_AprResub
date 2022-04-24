const listOfGymsMalmo = [
    {
        name:'Friskis & Svettis Johanneslust', 
        href:'https://www.friskissvettis.se/malmo/tranahar/johanneslust'
    },
    {
        name:'Friskis & Svettis Helenholm', 
        href:'https://www.friskissvettis.se/malmo/tranahar/heleneholm'
    },
    {
        name:'Friskis & Svettis Ön', 
        href:'https://www.friskissvettis.se/malmo/tranahar/on'
    },
    {
        name:'Nordic Wellness Fair Play', 
        href:'https://nordicwellness.se/vara-klubbar/malmo/malmo-fair-play-stadion/'
    },
    {
        name:'Nordic Wellness Vellinge', 
        href:'https://nordicwellness.se/vara-klubbar/vellinge/vellinge-sodra/'
    }
];

let text = "";

// Iterate through the gyms

for (let gyms of listOfGymsMalmo){
let addButtons = `
    <button type="button" class="btn btn-light"><a href="${gyms.href}" target="_blank">${gyms.name}</a></button>
    `;
    text += addButtons;
}

document.getElementById("gym").innerHTML = text;