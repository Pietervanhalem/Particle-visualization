var boundary = []
var zoom = []

var files = [
    'layer00',
    'layer21',
    'layer22',
    'layer23',
    'layer24',
    'layer41'
]

var whiteRampColors = {
    0.0: '#00000000',
    0.1: '#ffffffff',
    1.0: '#ffffffff'
};

var defaultRampColors = {
    0.0: '#3288bd',
    0.1: '#66c2a5',
    0.2: '#abdda4',
    0.3: '#e6f598',
    0.4: '#fee08b',
    0.5: '#fdae61',
    0.6: '#f46d43',
    1.0: '#d53e4f'
};

var pietersRampColors = {
    0.0: '#5500ff00',
    0.2: '#00009955',
    0.3: '#99999999',
    1.0: '#ffffffff'
};

var cmoceanRampColors = {
    0.000: '#172313ff', 
    0.166: '#144b2aff', 
    0.333: '#187328ff', 
    0.500: '#5f920cff', 
    0.666: '#aaac20ff', 
    0.833: '#e1cd73ff', 
    1.000: '#fffdcdff'
};

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
        if(
            mapInFrame(Q) &&
            map.getZoom() >= zoom[Q][0] &&
            map.getZoom() < zoom[Q][1]
         ){
            if(typeof map.getLayer('overlay' + 'canvas-' + files[Q]) == 'undefined'){
                var canv=document.createElement('canvas');
                canv.id = 'canvas-' + files[Q]
                canv.width = 1440
                canv.height = 720
                canv.style.display = 'none'
                document.body.appendChild(canv)

                newSource(
                    'canvas-' + files[Q],
                    files[Q], 
                    boundary[Q],
                    pietersRampColors
                    )
            }
      }else{
          if(typeof map.getLayer('overlay' + 'canvas-' + files[Q]) != 'undefined'){

            var canv = document.getElementById('canvas-' + files[Q])
            map.removeLayer('overlay' + 'canvas-' + files[Q]);
            map.removeSource('canvas-' + files[Q])
            var gl = canv.getContext('webgl');
            gl.getExtension('WEBGL_lose_context').loseContext()
            document.body.removeChild(canv)
        }
      }
}

map.on('load', function(){
    var canv=document.createElement('canvas');
    canv.id = 'canvas-layer00'
    canv.width = 1440
    canv.height = 720
    canv.style.display = 'none'
    document.body.appendChild(canv)

    newSource(
        'canvas-layer00',
        'layer00', 
        [[-180, 81],[180, 81],[180, -81],[-180, -81]],
        pietersRampColors
        )

    for(i=0; i<files.length; i++){
        loadData('./wind/'+ files[i] +'.json')
    }
    map.on('zoom', function(){
        for(j=0; j<files.length;j++){
            addCanvas(j)
        }
    })

    map.on('move', function(){
        for(j=0; j<files.length;j++){
            addCanvas(j)
        }
    })
    
  })


function mapInFrame(Q){
    var temp = false

    var points = boundary[Q]

    var a = map.getBounds()._sw.lng
    var b = map.getBounds()._ne.lng

    a = a - parseInt(a / 180) * 180 
    b = b - parseInt(b / 180) * 180 

    var x1 = Math.min(a, b)
    var x2 = Math.max(a, b)
    var y1 = Math.min(map.getBounds()._ne.lat, map.getBounds()._sw.lat)
    var y2 = Math.max(map.getBounds()._ne.lat, map.getBounds()._sw.lat)
    for (i = 0; i < 4; i++) {
        if ((x1 < points[i][0]) && (points[i][0] < x2) && 
            (y1 < points[i][1]) && (points[i][1] < y2)) {
                temp = true
            }
    }

    var points = [[x1,y1],[x1,y2],[x2,y1],[x2,y2],[(x1+x2)/2, y1],[(x1+x2)/2, y2], [x1, (y1+y2)/2], [x2, (y1+y2)/2] ]

    var x1 = Math.min(boundary[Q][0][0], boundary[Q][1][0])
    var x2 = Math.max(boundary[Q][0][0], boundary[Q][1][0])
    var y1 = Math.min(boundary[Q][2][1], boundary[Q][1][1])
    var y2 = Math.max(boundary[Q][2][1], boundary[Q][1][1])
    for (i = 0; i < 4; i++) {
        if ((x1 < points[i][0]) && (points[i][0] < x2) && 
            (y1 < points[i][1]) && (points[i][1] < y2)) {
                temp = true
            } 
    }
     return temp
}