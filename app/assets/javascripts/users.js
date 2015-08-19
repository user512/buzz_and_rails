// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var startUp = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success, failure);
        // navigator.geolocation.getCurrentPosition(setGeoCookie);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";}
    }

// function setGeoCookie(position) {
//   var cookie_val = position.coords.latitude + "|" + position.coords.longitude;
//   document.cookie = "lat_lng=" + escape(cookie_val);
// }

function success(position) {
  var buzzLatitude = document.getElementById('buzz-latitude')
  var buzzLongitude = document.getElementById('buzz-longitude')
  if (buzzLatitude) {
  buzzLatitude.value = position.coords.latitude;
  buzzLongitude.value = position.coords.longitude;}
  var myCenter = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  var mapProp = {
  center: myCenter,
  zoom:10,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),mapProp);

  var myCity = new google.maps.Marker({
  position:myCenter,
  map: map,
  animation: google.maps.Animation.BOUNCE,
  // radius:12000,
  // strokeColor:"#0000FF",
  // strokeOpacity:0.4,
  // strokeWeight:2,
  // fillColor:"#0000FF",
  // fillOpacity:0.2
  });

  myCity.setMap(map);

  google.maps.event.addDomListener(window, 'load', success);

}


function failure(position) {
  document.getElementById("map-canvas").innerHTML = "Please enable location for best Buzy experience!"
}

window.onload = startUp();