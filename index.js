//--Map initialization
var map = L.map('map').setView([20.5937, 78.9629], 4);

//--Tile layer providers -- https://leaflet-extras.github.io/leaflet-providers/preview/ 
var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
OSM.addTo(map);

//--Marker-- mention latLong and option --Refer-- https://leafletjs.com/reference.html#marker 
var agriculture = L.divIcon({className: 'fa fa-tree fa-lg'});
    /*iconUrl: '/icons/agri.png',
    iconSize: [20, 20]
     
    /*iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94] 
});*/
var singleMarker = L.marker([11.1271, 78.6569], {icon: agriculture});
var popup = singleMarker.bindPopup('The Green Icon indicates the agriculture project').openPopup()
popup.addTo(map)

var education = L.divIcon({className: 'fas fa-user-graduate fa-lg'});

var singleMarker = L.marker([28.6139, 77.2090], {icon: education});
var popup = singleMarker.bindPopup('The Blue graduate Icon indicates the education project').openPopup()
popup.addTo(map)

var health = L.divIcon({className: 'fas fa-heartbeat fa-lg'});

var singleMarker = L.marker([19.0760, 72.8777], {icon: health});
var popup = singleMarker.bindPopup('The Blue graduate Icon indicates the education project').openPopup()
popup.addTo(map)

/* ----alternate option to add the marker and pop up bind 
var popup = L.popup()
    .setLatLng([11.1271, 78.6569])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);

    var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);  */