import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point.js';
import Feature from 'ol/Feature.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import {fromLonLat} from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-11023402.901767345, 6428124.814789992],
    zoom: 4
  })
});

// Function to compute the product of p1 and p2
function addPointLatLong(Lat, Long) {
  var point = new Point(fromLonLat([Long, Lat]));
  var feature = new Feature({
    geometry: point
  });
  var vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [feature]
    })
  });
  map.addLayer(vectorLayer);
  }

  function addPointMercator(Lat, Long) {
    var point = new Point([Long, Lat]);
    var feature = new Feature({
      geometry: point
    });
    var vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
    });
    map.addLayer(vectorLayer);
    }
addPointMercator(6428124.814789992, -11023402.901767345)
addPointMercator(7428124.814789992, -12023402.901767345)
addPointLatLong(38.889805, -77.009056)