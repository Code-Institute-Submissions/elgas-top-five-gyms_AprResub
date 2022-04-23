// credit: Google tutorial for Map API Customization, slightly edited to fit this project.

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 55.56870832452651, lng: 13.02345844429232},
  });

 const labels = ["F&S Johannelust", "F&S Helenholm", "F&S Ön", "NW Fair Play", "NW Vellinge"];
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

const locations = [

  {lat: 55.61183531512725, lng: 13.047551216797158},
  {lat: 55.59011166022619, lng: 13.011845650964355},
  {lat: 55.59748353435578, lng: 12.922581736382345},
  {lat: 55.59538408704672, lng: 12.961033517873245},
  {lat: 55.46826082921328, lng: 13.018522352253543}
];