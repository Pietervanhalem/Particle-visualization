import {WindGL} from './wind-gl.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw';

export var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [0, 0],
    zoom: 1
});


export var newSource = function(newCanvas, data, coords, colorRamp){
  var canvas = document.getElementById(newCanvas);
  var gl = canvas.getContext('webgl', {antialiasing: true});
  var wind = new WindGL(gl, colorRamp);
  wind.numParticles = 100*100;

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
    "paint": {"raster-opacity": 1}
    })

    frame();
    
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
}