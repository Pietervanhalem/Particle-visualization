import '../css/main.css'
import {newSource, map} from './script.js'

var files = [
  'layer0,0,0',

  'layer0,0,1',
  'layer1,0,1',
  'layer0,1,1',
  'layer1,1,1',
 
]

var boundary = []
var zoom = []

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

for(let i=0; i<files.length; i++){
    loadData('../../wind/'+ files[i] +'.json')
  }

var cmoceanRampColors = {
  0.000: '#17231300',
  0.005: '#144b2a55',
  0.010: '#187328ff',
  0.500: '#5f920cff',
  0.666: '#aaac20ff',
  0.833: '#e1cd73ff',
  1.000: '#fffdcdff'
};

function addCanvas(fileIndex){
    if(
      mapInFrame(fileIndex) &&
        map.getZoom() >= zoom[fileIndex][0] &&
        map.getZoom() < zoom[fileIndex][1]
        ){
            if(typeof map.getLayer('overlay' + 'canvas-' + files[fileIndex]) == 'undefined'){
                var canv=document.createElement('canvas');
                canv.id = 'canvas-' + files[fileIndex]
                canv.width = 1440
                canv.height = 720
                let debugElement = document.getElementById('debug')
                debugElement.appendChild(canv)
        
                newSource(
                'canvas-' + files[fileIndex],
                files[fileIndex],
                boundary[fileIndex],
                cmoceanRampColors
                )
            }
            }else{
            if(typeof map.getLayer('overlay' + 'canvas-' + files[fileIndex]) != 'undefined'){
        
                var canv = document.getElementById('canvas-' + files[fileIndex])
                map.removeLayer('overlay' + 'canvas-' + files[fileIndex]);
                map.removeSource('canvas-' + files[fileIndex])
                var gl = canv.getContext('webgl');
                gl.getExtension('WEBGL_lose_context').loseContext()
                let debugElement = document.getElementById('debug')
                debugElement.removeChild(canv)
                }
            }

    function mapInFrame(fileIndex){
        var temp = false
        var points = boundary[fileIndex]

        var a = map.getBounds()._sw.lng
        var b = map.getBounds()._ne.lng
    
        a = a - parseInt(a / 180) * 180
        b = b - parseInt(b / 180) * 180
    
        var x1 = Math.min(a, b)
        var x2 = Math.max(a, b)
        var y1 = Math.min(map.getBounds()._ne.lat, map.getBounds()._sw.lat)
        var y2 = Math.max(map.getBounds()._ne.lat, map.getBounds()._sw.lat)

        for (let i = 0; i < 4; i++) {
            if ((x1 < points[i][0]) && (points[i][0] < x2) &&
                (y1 < points[i][1]) && (points[i][1] < y2)) {
                temp = true
                }
            }
            
        var points = [
          [x1,y1],
          [x1,y2],
          [x2,y1],
          [x2,y2],
          [(x1+x2)/2, y1],
          [(x1+x2)/2, y2], 
          [x1, (y1+y2)/2], 
          [x2, (y1+y2)/2] 
        ]
    
        var x1 = Math.min(boundary[fileIndex][0][0], boundary[fileIndex][1][0])
        var x2 = Math.max(boundary[fileIndex][0][0], boundary[fileIndex][1][0])
        var y1 = Math.min(boundary[fileIndex][2][1], boundary[fileIndex][1][1])
        var y2 = Math.max(boundary[fileIndex][2][1], boundary[fileIndex][1][1])
        
        for (let i = 0; i < 8; i++) {
            if ((x1 < points[i][0]) && (points[i][0] < x2) &&
                (y1 < points[i][1]) && (points[i][1] < y2)) {
                    temp = true
                    }   
            }
        return temp
        }
    }

map.on('load', function(){
  for(let j=0; j<files.length;j++){
    addCanvas(j)
    }

    map.on('zoom', function(){
        for(let j=0; j<files.length;j++){
                addCanvas(j)
                }
            })

    map.on('move', function(){
        for(let j=0; j<files.length;j++){
                addCanvas(j)
                }
            })
    })