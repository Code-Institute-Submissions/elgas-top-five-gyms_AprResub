// Initialize and add the map

function initMap() {
    let gothenburg = {lat: 57.708870, lng: 11.974560};
     // The map, centered at Gothenburg
    let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: gothenburg,
    });
  // The marker, positioned at Gothenburg
    let marker = new google.maps.Marker({
    position: gothenburg,
    map: map,
    });

  }
