//import db from "../server/utils/connect-db.js";

let map, locationWindow;

async function initMap() {
  //get maps library information
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  //create map
  map = new Map(document.getElementById("map"), {

    center: { lat: 35, lng: -100 },

    zoom: 4,

    mapId: "4504f8b37365c3d0",
  });

  // Create a <script> tag and set shark_data the source.
  const script = document.createElement("script");
  script.src = "/shark_data.js";
  document.getElementsByTagName("head")[0].appendChild(script);

  locationWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const pos = {

          lat: position.coords.latitude,

          lng: position.coords.longitude,

        };

        new google.maps.Marker({

          position: pos,

          map,

          title: "Current Location",

        });

        //map.setCenter(pos);

      },

      () => {

        handleLocationError(true, locationWindow, map.getCenter());

      },

    );

  } else {

    // Browser doesn't support Geolocation

    handleLocationError(false, locationWindow, map.getCenter());

  }

}

 
function handleLocationError(browserHasGeolocation, locationWindow, pos) {

  locationWindow.setPosition(pos);

  locationWindow.setContent(

    browserHasGeolocation

      ? "Error: The Geolocation service failed."

      : "Error: Your browser doesn't support geolocation.",

  );

  locationWindow.open(map);

}

//when a pin is clicked, changes from a pin to an infowindow
function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

//builds the actual html for the pins
function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="details">
        <div class="price">${property.name}</div>
        <div class="address">${property.description}</div>
        <div class="price">${property.weight}</div>
        <div class="address">${property.breed}</div>
    </div>
    `;
  return content;
}

// Loop through the shark_data and build the markers for each entry
const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coordLat = results.features[i].properties.originLat;
    const coordLon = results.features[i].properties.originLon;
    const latLng = new google.maps.LatLng(coordLat, coordLon);

    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(results.features[i].properties),
      position: latLng,
      title: results.features[i].properties.name,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, results.features[i]);
    });

  }
};

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;