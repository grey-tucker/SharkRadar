var lat;
var long;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.77915649401985, lng: -98.78573284163068},
      zoom: 4
    });
    var input = document.getElementById('searchInput');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
  
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
      
        // Location details
        for (var i = 0; i < place.address_components.length; i++) {
            if(place.address_components[i].types[0] == 'postal_code'){
                document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
            }
            if(place.address_components[i].types[0] == 'country'){
                document.getElementById('country').innerHTML = place.address_components[i].long_name;
            }
        }
        document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();
        lat = place.geometry.location.lat();
        long = place.geometry.location.lng();

		
		// North cordinate 
		const latArray = [43.637631, 43.643966, 43.682121, 43.616844];
		// West coordinate
		const lonArray = [-89.756144, -89.797429, -89.752100, -89.790590];
		
		const disArray = [];
		for (var i = 0; i < latArray.length; i++) {
			disArray[i] = getDistanceFromLatLonInKm(place.geometry.location.lat(), place.geometry.location.lng(), latArray[i], lonArray[i]);
		}
		
		disArray.sort((a, b) => a - b);
		
		const radiusDis = 5;
		let string1 = '';
		for (var i = 0; i < latArray.length; i++) {
			if (disArray[i] <= radiusDis) {
				string1 += disArray[i]+', ';
				// Add marker
				  marker = new google.maps.Marker({
					position: new google.maps.LatLng(latArray[i], lonArray[i]),
					map: map
				  });
			}
			
		}
		document.getElementById('dis').innerHTML = string1;
		test();
		
    });
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}
function deg2rad(deg) {
  return deg * (Math.PI/180)
}
function test(){
 
  document.getElementById("postal_code").innerHTML = lat +" "+ long;
}