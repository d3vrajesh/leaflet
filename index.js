//--Map initialization
var map = L.map('map').setView([23.839369, 79.527440], 4);


//--Tile layer providers -- https://leaflet-extras.github.io/leaflet-providers/preview/ 
var openStreet = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
openStreet.addTo(map);

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

//

L.control.layers(baseMaps, overlayMaps, { position: 'bottomright', collapsed: false }).addTo(map);


//--Bottom - leftside watermark 
L.Control.Watermark = L.Control.extend({
  onAdd: function (map) {
    var img = L.DomUtil.create('img');

    img.src = '/images/Logo-keystone.png';
    img.style.width = '50px';
    return img;
  },

  onRemove: function (map) {
    // Nothing to do here
  }
});

L.control.watermark = function (opts) {
  return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(map);