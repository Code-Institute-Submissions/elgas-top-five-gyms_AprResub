// credit: Google tutorial for Map API Customization, slightly edited to fit this project.

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {lat: 57.724890200639514, lng: 11.972090215756591},
  });

 const labels = ["NW Domkyrkan", "NW Almedal", " NW Lindholmen", "Sats Kompassen", "F&S Eriksberg"];
  // Add some markers to the map.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });     
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  }); 
}

//Gym locations in Stockholm
const locations = [
  {lat: 57.70948350247679, lng: 11.966018079708562},
  {lat: 57.685082116118664, lng: 11.997947095309051},
  {lat: 57.714213120703796, lng: 11.943015368520108},
  {lat: 57.70830571536213, lng: 11.96910781035166},
  {lat: 57.70624944789225, lng: 11.918982602040021}
 ];