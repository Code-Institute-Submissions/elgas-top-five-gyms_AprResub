 function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 57.708870, lng: 11.974560 },
    });

   const labels = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
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
    //Gothenburg locations
    {lat: 57.70948350247679, lng: 11.966018079708562},
    {lat: 57.685082116118664, lng: 11.997947095309051},
    {lat: 57.714213120703796, lng: 11.943015368520108},
    {lat: 57.70830571536213, lng: 11.96910781035166},
    {lat: 57.70624944789225, lng: 11.918982602040021},
    
    //Stockholm locations
    {lat: 59.34088161048154, lng: 18.048890713844774},
    {lat: 59.33168062021941, lng: 18.063725969664926},
    {lat: 59.313823645251574, lng: 18.075732354320607},
    {lat: 59.33426791757178, lng: 18.075417037126766},
    {lat: 59.33664540102926, lng: 18.03444322363454},

    //Malmo locations
    {lat: 55.61183531512725, lng: 13.047551216797158},
    {lat: 55.59011166022619, lng: 13.011845650964355},
    {lat: 55.59748353435578, lng: 12.922581736382345},
    {lat: 55.59538408704672, lng: 12.961033517873245},
    {lat: 55.46826082921328, lng: 13.018522352253543}

   ];