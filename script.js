mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw';

var files = [
  'layer00',
  'layer21',
  'layer22',
  'layer23',
  'layer24',
  'layer41'
]

function loadData(url){

  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }
  readTextFile(url, function(text){
    boundary.push(JSON.parse(text).boundary)
    zoom.push(JSON.parse(text).zoom)
  });
}

for(i=0; i<files.length; i++){
    loadData('./wind/'+ files[i] +'.json')
  }

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [0, 0],
  zoom: 1
});

function getJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('get', url, true);
  xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
          callback(xhr.response);
      } else {
          throw new Error(xhr.statusText);
      }
  };
  xhr.send();
}

function newSource(newCanvas, data, coords, colorRamp){
  function updateWind(windFile) {
    getJSON('./wind/' + windFile + '.json', function (windData) {
        const windImage = new Image();
        windData.image = windImage;
        windImage.src = './wind/' + windFile + '.png';
        windImage.onload = function () {
            wind.setWind(windData);
        };
    });
  }

  function frame() {
    if (wind.windData) {
      wind.draw();
    }
    requestAnimationFrame(frame);
  }

  var canvas = document.getElementById(newCanvas);
  var gl = canvas.getContext('webgl', {antialiasing: true});
  var wind = new WindGL(gl, colorRamp);
  wind.fadeOpacity = 0.7;
  wind.numParticles = 10000;

  updateWind(data);

  map.addSource(newCanvas, {
    type: 'canvas',
    canvas: newCanvas,
    animate: true,
    coordinates: coords
  });

  map.addLayer({
    "id": "overlay" + newCanvas,
    "source": newCanvas,
    "type": "raster",
    "paint": {"raster-opacity": 0.7}
    })

    frame();
}
