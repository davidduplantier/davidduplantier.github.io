/* Set up map */
let startLat = 42.3464661;
let startLong = -71.0744381;
let startZoom = 13.18;
let map = L.map('map').setView([startLat, startLong], startZoom);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGR1cGxhbnQiLCJhIjoiY2p5MzU5Y2FpMHcyMjNicTh1c3Jqbzl1dyJ9.u02VQdp7VPZCOMT-RYn-VA'
}).addTo(map);

map.invalidateSize();

/* On clicking next, switch from input page to result page */
document.getElementById("button").addEventListener("click", function() {
  let result = calculateResult();
  updateOutputPage(result);

  document.querySelector("body").style.backgroundImage = "url('photo/boston5.png')";

  document.getElementById("inputPage").hidden = true;
  document.getElementById("resultPage").hidden = false;
});

/* Update output page to display results for calculated neighborhood */
function updateOutputPage(neighborhood) {
  let nodes = document.querySelectorAll(".resultText");
  for (node of nodes) {
    node.innerHTML = neighborhood;
  }

  let latlong = [viewCoords[neighborhood][0], viewCoords[neighborhood][1]];
  let zoom = viewCoords[neighborhood][2];
  map.setView(latlong, zoom);

  addNeighborhoodDataToMap(neighborhood);
}

/* Add all data to map for the given neighborhood */
function addNeighborhoodDataToMap(neighborhood) {
  let pinCoord = pinCoords[neighborhood];
  let pin = L.marker(pinCoord).addTo(map);
  pin.bindPopup(popupInfo[neighborhood]);

  let geoJSONFeature = getNeighborhoodBound(neighborhood);
  if (geoJSONFeature) {
    L.geoJSON(geoJSONFeature).addTo(map);
  }

  let trainMarker = L.icon({
    iconUrl: 'photo/mbta.png',
    iconSize: [25, 25]
  });
  let polylines = getPolyLines(neighborhood);
  for (polyline of polylines) {
    let movingMarker = L.Marker.movingMarker(polyline, 20000, {loop: true, icon: trainMarker}).addTo(map);
    movingMarker.start();
  }
}
