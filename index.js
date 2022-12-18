//--Map initialization
var map = L.map('map').setView([23.839369, 79.527440], 4);


//--Tile layer providers -- https://leaflet-extras.github.io/leaflet-providers/preview/ 
var openStreet = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
openStreet.addTo(map);
/*
// google street 
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);


*/
//--Marker-- mention latLong and option --Refer-- https://leafletjs.com/reference.html#marker 
//var agriculture = L.divIcon({ className: 'fa-solid fa-wheat' });
/*iconUrl: '/icons/agri.png',
iconSize: [20, 20]
 
/*iconAnchor: [22, 94],
popupAnchor: [-3, -76],
shadowUrl: 'my-icon-shadow.png',
shadowSize: [68, 95],
shadowAnchor: [22, 94] 
});
*/
/*
var singleMarker = L.marker([11.1271, 78.6569], { icon: agriculture });
var popup = singleMarker.bindPopup('The Green Icon indicates the agriculture project').openPopup()
popup.addTo(map)

var education = L.divIcon({ className: 'fas fa-user-graduate' });

var singleMarker = L.marker([28.6139, 77.2090], { icon: education });
var popup = singleMarker.bindPopup('The Blue graduate Icon indicates the education project').openPopup()
popup.addTo(map)

var health = L.divIcon({ className: 'fas fa-heartbeat' });

var singleMarker = L.marker([19.0760, 72.8777], { icon: health });
var popup = singleMarker.bindPopup('The Blue graduate Icon indicates the education project').openPopup()
popup.addTo(map)

 ----alternate option to add the marker and pop up bind 
var popup = L.popup()
    .setLatLng([11.1271, 78.6569])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);

    var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);  

    //how to add leaflet marker filter based on category in javascript?
*/
//--- Layer control 


//--- collection -1 
var collection1 = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "description": "<p><img src='https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg'><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p> ", "marker-color": "#e90c0c", "marker-size": "medium" }, "geometry": { "coordinates": [76.8681636538007, 26.461561664701165], "type": "Point" } }, { "type": "Feature", "properties": { "description": "<p><img src='https://cdn.pixabay.com/photo/2022/09/30/14/30/lavender-7489530__340.jpg'><p> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>  ", "marker-color": "#e90c0c", "marker-size": "medium" }, "geometry": { "coordinates": [85.58166487534226, 24.973380738839353], "type": "Point" } }, { "type": "Feature", "properties": { "description": "<p><img src='https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg'><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>  ", "marker-color": "#e90c0c", "marker-size": "medium" }, "geometry": { "coordinates": [77.17348370387981, 14.89272535365579], "type": "Point" } }] }

//--- Collection -2 

var collection2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "description": "<p><img src='https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg'><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>",
        "marker-color": "#1411d4",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          74.52893564760336,
          28.737453495348788
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "description": "<p><img src='https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg'><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>",
        "marker-color": "#1411d4",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          72.94766472793654,
          22.95405379469318
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "description": "<p><img src='https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg'><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>",
        "marker-color": "#1411d4",
        "marker-size": "medium"
      },
      "geometry": {
        "coordinates": [
          75.91210713701946,
          25.175856123045293
        ],
        "type": "Point"
      }
    }
  ]
}



// map.removeLayer(singleMarker)
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.description) {
    layer.bindPopup(feature.properties.description);
  }
}

var cat1 = L.geoJSON(collection1, {
  onEachFeature: onEachFeature
}).addTo(map);

var cat2 = L.geoJSON(collection2, {
  onEachFeature: onEachFeature
}).addTo(map);


var baseMaps = {
  //"Google Street": googleStreets,
  "OpenStreetMap": openStreet,

};
var overlayMaps = {
  "Category-1": cat1,
  "Category-2": cat2,

};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);



