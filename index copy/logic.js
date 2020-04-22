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

// Define a markerSize function that will give each city a different radius based on its crime_rating
function markerSize(crime_rating) {
  return crime_rating * 3000;
}

// Each city object contains the city's name, location and crime_rating
var destination = [
  {
    name: "Grand Canyon",
    location: [36.056595, -112.125092],
    crime_rating: 30
  },
  {
    name: "Yosemite National Park",
    location: [37.865101, -119.538330],
    crime_rating: 27.3
  },
  {
    name: "Yellow Stone National Park",
    location: [44.429764, -110.584663],
    crime_rating: 12.9
  },
  {
    name: "Maui",
    location: [20.798363, -156.331924],
    crime_rating: 9
  },
  {
    name: "Glacier National Park",
    location: [48.7596, -113.787],
    crime_rating: 26.9
  },
  {
    name: "New York City",
    location: [40.730610, -73.935242],
    crime_rating: 28.2
  },
  {
    name: "San Francisco",
    location: [37.773972, -122.431297],
    crime_rating: 39.6
  },
  {
    name: "Washington D.C.",
    location: [38.89511, -77.03637],
    crime_rating: 56.2
  },
  {
    name: "Honolulu",
    location: [21.30694, -157.85833],
    crime_rating: 17.4
  },
  {
    name: "Telluride",
    location: [37.937492, -107.812286],
    crime_rating: 12.2
  },
  {
    name: "Jackson Hole",
    location: [43.582767, -110.821999],
    crime_rating: 17.2
  },
  {
    name: "Lake Tahoe",
    location: [39.096848, -120.032349],
    crime_rating: 34.3
  },
  {
    name: "Juneau",
    location: [58.30194, -134.41972],
    crime_rating: 37.9
  },
  {
    name: "Grand Teton National Park",
    location: [43.6034958,  -110.736336],
    crime_rating: 17.2
  },
  {
    name: "Zion National Park",
    location: [37.317207, -113.022537],
    crime_rating: 10.6
  },
  {
    name: "Kauai",
    location: [22.108543, -159.496765],
    crime_rating: 8.5
  },
  {
    name: "San Diego",
    location: [32.71533, -117.15726],
    crime_rating: 24.4
  },
  {
    name: "Aspen",
    location: [39.191097, -106.817535],
    crime_rating: 7.6
  },
  {
    name: "New Orleans",
    location: [29.95465, -90.07507],
    crime_rating: 49.1
  },
  {
    name: "Boston",
    location: [42.35843, -71.05977],
    crime_rating: 37.3
  },
  {
    name: "Chicago",
    location: [41.85003, -87.65005],
    crime_rating: 49.9
  },
  {
    name: "Seattle",
    location: [47.60621, -122.33207],
    crime_rating: 32.3
  },
  {
    name: "Sedona",
    location: [34.86974, -111.76099],
    crime_rating: 13.8
  },
  {
    name: "Miami",
    location: [25.77427, -80.19366],
    crime_rating: 48.8
  },
  {
    name: "Outer Banks",
    location: [35.5585, -75.4665],
    crime_rating: 17.9
  },
  {
    name: "Las Vegas",
    location: [36.17497, -115.13722],
    crime_rating: 40.9
  },
  {
    name: "Charleston",
    location: [32.77657, -79.93092],
    crime_rating: 17.7
  },
  {
    name: "Key West",
    location: [24.5557, -81.78259],
    crime_rating: 24.7
  },
  {
    name: "Lake Placid",
    location: [44.141073, -73.876495],
    crime_rating: 11.8
  },
  {
    name: "Savannah",
    location: [32.08354, -81.09983],
    crime_rating: 22.2
  },
];

// Loop through the destination array and create one marker for each city object
for (var i = 0; i < destination.length; i++) {
  L.circle(destination[i].location, {
    fillOpacity: 0.5,
    color: "black",
    fillColor: "red",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its crime_rating
    radius: markerSize(destination[i].crime_rating)
  }).bindPopup("<h1>" + destination[i].name + "</h1> <hr> <h3>crime_rating: " + destination[i].crime_rating + "</h3>").addTo(mymap);
}
L.control.mousePosition().addTo(mymap);