// credit: Google tutorial for Map API Customization, slightly edited to fit this project.

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 59.32793221198714, lng: 18.05421685247 },
  });

 const labels = ["NW", "NW", " Sats", "Sats", "Sats"];
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
  {lat: 59.34088161048154, lng: 18.048890713844774},
  {lat: 59.33168062021941, lng: 18.063725969664926},
  {lat: 59.313823645251574, lng: 18.075732354320607},
  {lat: 59.33426791757178, lng: 18.075417037126766},
  {lat: 59.33664540102926, lng: 18.03444322363454}
 ];