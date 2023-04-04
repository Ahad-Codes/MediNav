import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";


export default function ViewHospitals() {

  var map;
var infowindow;

function initialize() {
  var pyrmont = new GoogleMap.LatLng(31.465001 , 74.393663); // sample location to start with: Mumbai, India

  map = new GoogleMap.Map(document.getElementById('map-canvas'), {
    center: pyrmont,
    zoom: 15
  });

  var request = {
    location: pyrmont,
    radius: 200,
    types: ['hospital', 'health'] // this is where you set the map to get the hospitals and health related places
  };
  infowindow = new GoogleMap.InfoWindow();
  var service = new GoogleMap.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status === GoogleMap.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new GoogleMap.Marker({
    map: map,
    position: place.geometry.location
  });

  GoogleMap.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

GoogleMap.event.addEventListener(window, 'load', initialize);

  return (

    <>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>

    <div id="map-canvas"></div>

    </>
    
  );
}
