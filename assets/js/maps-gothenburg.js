function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 57.708870, lng: 11.974560 },
  });

 
  const contentString = [
    'Nordic Wellness <a href=#nw1 >Nordic Wellness</a>',
    'Nordic Kungälv',
    'odins platsen',
    'Dom Kyrkan'
  ];
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

   
  
  const marker = new google.maps.Marker({
    position: {lat: 57.70598, lng: 11.96473326},
    map,
    title: "NW",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
      });
  });
  
  marker = new google.maps.Marker({
    position: {lat: 57.715135, lng: 11.996846317},
    map,
    tittle: 
  });
  
 

}



