import '../style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point.js';
import Feature from 'ol/Feature.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { fromLonLat } from 'ol/proj';
import { Fill, RegularShape, Stroke, Style} from 'ol/style.js';
import CircleStyle from 'ol/style/Circle.js';


//Data fetching APIs
const cities_url = "https://thundich.pythonanywhere.com/cities"

// Info element to allow for hover tooltip
const info = document.getElementById('info');

// Initializing the map 
function init() {
  d3.json(cities_url).then((data) => {
    for (let i = 0; i < data.length; i++) {
      let lat = data[i]["lat"]
      let lng = data[i]["lng"]
      let job_count = data[i]["job_count"]
      let high_salary_avg = data[i]["high_salary_avg"]
      let low_salary_avg = data[i]["low_salary_avg"]
      let company_size = data[i]["size"]
      let shape = getShape(company_size)
      let color = getShapeColor(job_count)
      let shape_size = getScale(high_salary_avg, 38000, 190000, 4, 20)
      let city = data[i]["city"]
      let state_id = data[i]["state_id"]
      let population = data[i]["population"]

      addPointLatLong(lat,lng, shape, color, shape_size,city,state_id,population,
                      job_count,low_salary_avg,high_salary_avg,company_size)
    }
})}
    
const stroke = new Stroke({ color: 'black', width: 2 });
const fill = new Fill({ color: 'green' });
function getStyle(color, shape, size) {
  if (shape == "square") {
    return new Style({
      image: new RegularShape({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 4,
        radius: size,
        angle: Math.PI / 4
      })
    })
  } else if (shape == "star"){
    return new Style({
      image: new RegularShape({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 4,
        radius: size,
        radius2: size/2 -1,
        angle: 0
      })
    }) 
  } else if (shape == "pentagon"){
    return new Style({
      image: new RegularShape({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 5,
        radius: size,
        angle: 0
      })
    }) 
  } else if (shape == "diamond"){
    return new Style({
      image: new RegularShape({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 2,
        radius: size,
        radius2: size,
        angle: 0
      })
    }) 
  } else if (shape == "heptagon"){
    return new Style({
      image: new RegularShape({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 7,
        radius: size,
        angle: 0
      })
    })  
  } else if (shape == "triangle"){
    return new Style({
      image: new RegularShape({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 3,
        radius: size,
        rotation: 0,
        angle: 0
      })
    })
  } else if (shape == "circle"){
    return new Style({
      image: new CircleStyle({
        fill: new Fill({ color: color }),
        stroke: stroke,
        points: 3,
        radius: size,
        rotation: Math.PI / 4,
        angle: 0
      })
    })
  }
}

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([-98.583333,39.833333]),
    zoom: 4
  })
});

// Function to compute the product of p1 and p2
function addPointLatLong(Lat, Long, shape, color, shape_size, city, state_id, 
                         population, job_count, low_salary_avg, high_salary_avg, company_size) {
  var feature = new Feature(new Point(fromLonLat([Long, Lat])));
  feature.setStyle(getStyle(color, shape, shape_size))
  feature.set("city", city)
  feature.set("state_id", state_id)
  feature.set("population", population)
  feature.set("job_count", job_count)
  feature.set("low_salary_avg", low_salary_avg)
  feature.set("high_salary_avg", high_salary_avg)
  feature.set("size", company_size)

  var vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [feature]
    })
  });
  map.addLayer(vectorLayer);
}

function getScale(number, range_min, range_max, target_min, target_max){
   return (number-range_min)/(range_max-range_min) * (target_max-target_min) + target_min
}

function getShapeColor(job_count) {
  if (job_count == 1) {
      return "red";
  } else if (job_count == 2) {
      return "green";
  } else if (job_count> 2 && job_count<= 10) {
      return "orange"; 
  } else if (job_count> 10 && job_count <= 50) {
      return "yellow"; 
  } else if (job_count> 50 && job_count <= 100) {
      return "pink"
  } else {
      return "blue"
  }
}

function getShape(company_size) {
  if (company_size== "1 to 50 employees") {
      return "triangle";
  } else if (company_size=="51 to 200 employees") {
      return "diamond";
  } else if (company_size== "201 to 500 employees") {
      return "circle"; 
  } else if (company_size== "501 to 1000 employees") {
      return "star"; 
  } else if (company_size == "1001 to 5000 employees") {
      return "square"
  } else if (company_size == "5001 to 10000 employees") {
    return "x"
  } else if (company_size == "10000+ employees") {
    return "pentagon"
  }
}

let currentFeature;
function displayFeatureInfo(pixel, target) {
  const feature = target.closest('.ol-control')
    ? undefined
    : map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });
  if (feature) {
    info.style.left = pixel[0] + 'px';
    info.style.top = pixel[1] + 'px';
    if (feature !== currentFeature) {
      info.style.visibility = 'visible';
      info.innerText = 'City: ' + feature.get('city') + 
                       "\nState: " + feature.get('state_id') + 
                       "\nJob Offerings: " + feature.get('job_count') + 
                       "\nAvg Highest Salary Offering: " + feature.get('high_salary_avg') + 
                       "\nAvg Lowest Salary Offering: : " + feature.get('low_salary_avg') + 
                       "\nCity Population: " + feature.get('population') + 
                       "\nMost Common Company Size: " + feature.get('size');
    }
  } else {
    info.style.visibility = 'hidden';
  }
  currentFeature = feature;
};



map.on('pointermove', function (evt) {
  if (evt.dragging) {
    info.style.visibility = 'hidden';
    currentFeature = undefined;
    return;
  }
  const pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel, evt.originalEvent.target);
});

map.on('click', function (evt) {
  displayFeatureInfo(evt.pixel, evt.originalEvent.target);
});

map.getTargetElement().addEventListener('pointerleave', function () {
  currentFeature = undefined;
  info.style.visibility = 'hidden';
});

init()