
function initialize() {
	var current_marker = 0;
	var infowindow = new google.maps.InfoWindow();
	var  markers_type = [['_maps_marker1.png','_maps_marker2.png','_maps_marker3.png','_maps_marker4.png','_maps_marker5.png'],['_maps_marker_b1.png','_maps_marker_b2.png','_maps_marker_b3.png','_maps_marker_b4.png','_maps_marker_b5.png']];
	var info_inner = ['box1','box2','box3','box4','box5',];
	var  info_fillColors = ['#7b3190','#e31271','#c6d742','#dc5c46','#1e85c3'];
	var center = new google.maps.LatLng(41.010993,28.843203);
	var map = new google.maps.Map(document.getElementById('map_canvas'), {
		zoom: 12,
		center: center,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "_js/data.txt",
		success: function(response) {
			//var infoWindows = ['content1','content2','content3','content4','content5'];
			var info = [];
			var iconBase = '_img/';
			var markers = [];
			for (var i = 0; i < response.data.length; i++) {
				
				if(i >= 5){
					current_marker = 0;	
				}
				
				var latLng = new google.maps.LatLng(response.data[i].latitude, response.data[i].longitude);
				var marker = new google.maps.Marker({
					position: latLng,
					map: map,
					icon: iconBase + markers_type[0][current_marker],
					clickable: true
				});
				markers.push(marker);
				var myOptions = {
					content: '<div class="'+info_inner[current_marker]+'">' + $('li#maps'+current_marker).find('h3').children('a').text() + '<span></span></div>'
					,disableAutoPan: false
					,maxWidth: 0
					,pixelOffset: new google.maps.Size(-15, -60)
					,alignBottom :true
					,zIndex: null
					,boxStyle: {
						background: info_fillColors[current_marker]
						}
                ,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
                ,infoBoxClearance: new google.maps.Size(1, 1)
                ,isHidden: false
                ,pane: "floatPane"
                ,enableEventPropagation: false

				}
				info.push(new InfoBox(myOptions));
				current_marker++;
				
				(function($i, rl) {
					google.maps.event.addListener(markers[$i], 'click', function() {
						
						
						
						map.setCenter(markers[$i].getPosition());
						for(var b = 0; b < markers.length; b++){
							markers[b].setIcon('_img/' + markers_type[0][b]);
						}
						markers[$i].setIcon('_img/' + markers_type[1][$i]);
						/*$('html, body').animate({scrollTop:400+(204*$i)}, 700, function(){
							$('li#maps'+$i).addClass('active').siblings().removeClass('active');
						});
						*/
						
						
						//infowindow.setContent('<div class="'+infoWindows[$i]+'">'+  +'</div>');
						//infowindow.setOptions({fillColor: info_fillColors[$i]});
						//$('.content'+[$i]).parent().css({'background-color':info_fillColors[$i]});
						//infowindow.open(map,markers[$i])
						
						for (var j = 0; j < rl; j++) {
							info[j].close();
						}
						info[$i].open(map,markers[$i]);
						//console.log(info);
						
						
					});
					
					/*google.maps.event.addListener(markers[$i], 'mouseover', function() {
						infowindow.setContent('<div class="'+infoWindows[$i]+'">'+ $('li#maps'+$i).find('h3').children('a').text() +'</div>');
						infowindow.open(map,markers[$i])	
					});*/
					
					
				})(i, response.data.length);

			}
			

		},
		error: function() {
			console.log('err');
		}
	});
}
google.maps.event.addDomListener(window, 'load', initialize);






