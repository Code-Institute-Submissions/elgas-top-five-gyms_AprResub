 function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 57.708870, lng: 11.974560 },
    });

   // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
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
    //Gothenburg locations
    { lat: 57.70609, lng: 11.96510},
    {lat: 57.71309002, lng: 12.0051182},
    {lat: 57.715135, lng: 11.996846317},
    {lat: 57.70598, lng: 11.96473326}
    
    //Stockholm locations
    //Malmo locations
   ];