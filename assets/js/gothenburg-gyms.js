const listOfGymsGothenburg = [
    {
        name:'Nordic Wellness Domkyrkan', 
        href:'https://nordicwellness.se/vara-klubbar/goteborg/goteborg-domkyrkan/'
    },
    {
        name:'Nordic Wellness Almedal', 
        href:'https://nordicwellness.se/vara-klubbar/goteborg/goteborg-almedal/'
    },
    {
        name:'Nordic Wellness Lindholmen', 
        href:'https://nordicwellness.se/vara-klubbar/goteborg/goteborg-lindholmen/'
    },
    {
        name:'SATS Kompassen', 
        href:'https://www.sats.se/gym/goteborg/sats-kompassen/'
    },
    {
        name:'Friskis & Svettis Eriksberg', 
        href:'https:https://www.friskissvettis.se/goteborg'
    }
];

let text = "";

// Iterate through the gyms

for (gyms of listOfGymsGothenburg){
let addButtons = `
    <button type="button" class="btn btn-light"><a href="${gyms.href}" target="_blank">${gyms.name}</a></button>
    `;
    text += addButtons;
}

document.getElementById("gym").innerHTML = text;