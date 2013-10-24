var map;
var marker = null;
function add_pin() {
	var center = new google.maps.LatLng(41.010993,28.843203);
	var map = new google.maps.Map(document.getElementById('map_canvasPopup'), {
		zoom: 12,
		center: center,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	
	google.maps.event.addListener(map, 'click', function(event) {
                    if (marker) { marker.setMap(null); }
                     marker = new google.maps.Marker({ position: event.latLng, map: map});

                });
}
google.maps.event.addDomListener(window, 'load', add_pin);