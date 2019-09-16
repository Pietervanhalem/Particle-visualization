var ani01

var ani21
var ani22
var ani23
var ani24


var boundary = []
var zoom = []
var files = [
    'layer00',
    'layer21',
    'layer22',
    'layer23',
    'layer24',
]

// console.log(map.getBounds()._ne.lng, map.getBounds()._ne.lat, map.getBounds()._sw.lng, map.getBounds()._sw.lat)

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


function addCanvas(Q){
    if(map.getZoom() > zoom[Q][0] & map.getZoom() < zoom[Q][1]){
       
        if(typeof map.getLayer('overlay' + 'canvas-' + files[Q]) == 'undefined'){

            newSource(
                ani01,
                'canvas-' + files[Q],
                files[Q], 
                boundary[Q]
                )
            }
      }else{
          if(typeof map.getLayer('overlay' + 'canvas-' + files[Q]) != 'undefined'){
            cancelAnimationFrame(ani01)

            map.removeLayer('overlay' + 'canvas-' + files[Q]);
            map.removeSource('canvas-' + files[Q])
        }
      }
}

map.on('load', function(){
    newSource(
        ani01,
        'canvas-layer00',
        'layer00', 
        [[-180, 81],[180, 81],[180, -81],[-180, -81]]
        )

    for(i=0; i<files.length; i++){
        loadData('./wind3/'+ files[i] +'.json')

    }

    map.on('zoom', function(){
        for(j=0; j<files.length;j++){
            addCanvas(j)
        }
    })
  })