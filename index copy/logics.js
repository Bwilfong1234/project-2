
// Create a map object
 
  var mymap = L.map('mapid').setView([39.857507, -106.853516], 4);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(mymap);
    var national_park_icon = L.icon({
    iconUrl: 'tree.svg',
    
    iconSize:     [20, 65], // size of the icon
    iconAnchor:   [16, 47], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});

var city_icon = L.icon({
    iconUrl: 'urban.svg',
    
    iconSize:     [20, 65], // size of the icon
    iconAnchor:   [16, 47], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});

var wave_icon = L.icon({
    iconUrl: 'wave.svg',
    
    iconSize:     [20, 65], // size of the icon
    iconAnchor:   [16, 47], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});

var mount_icon = L.icon({
    iconUrl: 'mountain.svg',
    
    iconSize:     [20, 65], // size of the icon
    iconAnchor:   [10, 47], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});

	L.marker([36.056595, -112.125092],{icon: national_park_icon}).addTo(mymap)
        .bindPopup("<b>Grand Canyon</b><hr/><b/>Arizona</b><hr/><b>Crime Rating: 30</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4").openPopup();

    L.marker([37.865101, -119.538330],{icon: national_park_icon}).addTo(mymap)
        .bindPopup("<b>Yosemite National Park</b><hr/><b/>California.</b><hr/><b>Crime Rating: 27.3</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
        
    L.marker([44.429764, -110.584663],{icon: national_park_icon}).addTo(mymap)
        .bindPopup("<b>Yellow Stone National Park</b><hr/><br />Montana/Wyoming.</b><hr/><b>Crime Rating: 12.9</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 3.7").openPopup();

    L.marker([20.798363, -156.331924],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Maui</b><br />Hawaii.</b><hr/><b>Crime Rating: 9</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    
    L.marker([48.7596, -113.787],{icon: national_park_icon}).addTo(mymap)
        .bindPopup("<b>Glacier National Park</b><hr/><b/>Montana.</b><hr/><b>Crime Rating: 26.9</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.3").openPopup();

    L.marker([40.730610, -73.935242],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>New York City</b><hr/><b/>New York</b><hr/><b>Crime Rating: 28.2</b><hr/><b>Attraction Rating: 4.5</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([37.773972, -122.431297],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>San Francisco</b><hr/><b/>California.</b><hr/><b>Crime Rating: 39.6</b><hr/><b>Attraction Rating: 4.5</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([38.89511, -77.03637],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Washington D.C.</b><hr/><b/>District of Columbia.</b><hr/><b>Crime Rating: 56.2</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([21.30694, -157.85833],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Honolulu</b><hr/><b/>Hawaii.</b><hr/><b>Crime Rating: 17.4</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([37.937492, -107.812286],{icon: mount_icon}).addTo(mymap)
        .bindPopup("<b>Telluride</b><hr/><b/>Colorado.</b><hr/><b>Crime Rating: 12.2</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([43.582767, -110.821999],{icon: mount_icon}).addTo(mymap)
        .bindPopup("<b>Jackson Hole</b><hr/><b/>Wyoming</b><hr/><b>Crime Rating: 17.2</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([39.096848, -120.032349],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Lake Tahoe</b><hr/><b/>California</b><hr/><b>Crime Rating: 34.3</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.1").openPopup();
    var popup = L.popup();
    
    L.marker([58.30194, -134.41972],{icon: mount_icon}).addTo(mymap)
        .bindPopup("<b>Juneau</b><hr/><b/>Alaska.</b><hr/><b>Crime Rating: 37.9</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.2").openPopup();
    var popup = L.popup();
    
    L.marker([43.6034958,  -110.736336],{icon: national_park_icon}).addTo(mymap)
        .bindPopup("<b>Grand Teton National Park</b><hr/><b/>Wyoming.</b><hr/><b>Crime Rating: 17.2</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([37.317207, -113.022537],{icon: national_park_icon}).addTo(mymap)
        .bindPopup("<b>Zion National Park</b><hr/><b/>Utah.</b><hr/><b>Crime Rating: 10.6</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4").openPopup();
    var popup = L.popup();
    
    L.marker([22.108543, -159.496765],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Kauai</b><hr/><b/>Hawaii</b><hr/><b>Crime Rating: 8.5</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();
    
    L.marker([32.71533, -117.15726],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>San Diego</b><hr/><b/>California</b><hr/><b>Crime Rating: 24.4</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.4").openPopup();
    var popup = L.popup();
    
    L.marker([39.191097, -106.817535],{icon: mount_icon}).addTo(mymap)
        .bindPopup("<b>Aspen</b><hr/><b/>Colorado.</b><hr/><b>Crime Rating: 7.6</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();

    L.marker([29.95465, -90.07507],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>New Orleans</b><b/>Louisiana</b><hr/><b>Crime Rating: 49.1</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.5").openPopup();
    var popup = L.popup();

    L.marker([42.35843, -71.05977],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Boston</b><hr/><b/>Massachusetts</b><hr/><b>Crime Rating: 37.3</b><hr/><b>Attraction Rating: 4.5</b><hr/><b>Restaraunt Rating: 4.4").openPopup();
    var popup = L.popup();

    L.marker([41.85003, -87.65005],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Chicago</b><hr/><b/>Illinois</b><hr/><b>Crime Rating: 49.9</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.4").openPopup();
    var popup = L.popup();

    L.marker([47.60621, -122.33207],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Seattle</b><hr/><b/>Washington</b><hr/><b>Crime Rating: 32.3</b><hr/><b>Attraction Rating: 4.5</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();

    L.marker([34.86974, -111.76099],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Sedona</b><hr/><b/>Arizona</b><hr/><b>Crime Rating: 13.8</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.2").openPopup();
    var popup = L.popup();

    L.marker([25.77427, -80.19366],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Miami</b><hr/><b/>Florida</b><hr/><b>Crime Rating: 48.8</b><hr/><b>Attraction Rating: 4.4</b><hr/><b>Restaraunt Rating: 4.2").openPopup();
    var popup = L.popup();

    L.marker([35.5585, -75.4665],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Outer Banks</b><hr/><b/>North Carolina</b><hr/><b>Crime Rating: 17.9</b><hr/><b>Attraction Rating: 4.7</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();

    L.marker([36.17497, -115.13722],{icon: city_icon}).addTo(mymap)
        .bindPopup("<b>Las Vegas</b><hr/><b/>Nevada</b><hr/><b>Crime Rating: 40.9</b><hr/><b>Attraction Rating: 4.4</b><hr/><b>Restaraunt Rating: 4.2").openPopup();
    var popup = L.popup();

    L.marker([32.77657, -79.93092],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Charleston</b><hr/><b/>South Carolina</b><hr/><b>Crime Rating: 17.7</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.5").openPopup();
    var popup = L.popup();

    L.marker([24.5557, -81.78259],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Key West</b><hr/><b/>Florida</b><hr/><b>Crime Rating: 24.7</b><hr/><b>Attraction Rating: 4.5</b><hr/><b>Restaraunt Rating: 4.3").openPopup();
    var popup = L.popup();

    L.marker([44.141073, -73.876495],{icon: mount_icon}).addTo(mymap)
        .bindPopup("<b>Lake Placid</b><hr/><b/>New York</b><hr/><b>Crime Rating: 11.8</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.2").openPopup();
    var popup = L.popup();

    L.marker([32.08354, -81.09983],{icon: wave_icon}).addTo(mymap)
        .bindPopup("<b>Savannah</b><hr/><b/>Georgia</b><hr/><b>Crime Rating: 22.2</b><hr/><b>Attraction Rating: 4.6</b><hr/><b>Restaraunt Rating: 4.2").openPopup();
    var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(e.latlng.toString())
			.openOn(mymap);
	}

    mymap.on('click', onMapClick);

    L.control.mousePosition().addTo(mymap);