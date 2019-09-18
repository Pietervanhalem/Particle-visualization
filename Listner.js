var boundary = []
var zoom = []

var files = [
    'layer00',
    'layer21',
    'layer22',
    'layer23',
    'layer24',
]

var defaultRampColors = {
    0.0: '#00000000',
    0.1: '#ffffffff',
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
        if(map.getZoom() >= zoom[Q][0] && map.getZoom() < zoom[Q][1]){
            if(typeof map.getLayer('overlay' + 'canvas-' + files[Q]) == 'undefined'){
                var canv=document.createElement('canvas');
                canv.id = 'canvas-' + files[Q]
                canv.width = 1440
                canv.height = 720
                document.body.appendChild(canv)

                newSource(
                    'canvas-' + files[Q],
                    files[Q], 
                    boundary[Q],
                    defaultRampColors
                    )
            }
      }else{
          if(typeof map.getLayer('overlay' + 'canvas-' + files[Q]) != 'undefined'){

            var canv = document.getElementById('canvas-' + files[Q])

            map.removeLayer('overlay' + 'canvas-' + files[Q]);
            map.removeSource('canvas-' + files[Q])
        }
      }
}

map.on('load', function(){
    for(i=0; i<files.length; i++){
        loadData('./wind4/'+ files[i] +'.json')
    }
    map.on('zoom', function(){
        for(j=0; j<files.length;j++){
            addCanvas(j)
        }
    })
  })


function mapInFrame2(index){
    var a = map.getBounds()._sw.lng
    var b = map.getBounds()._ne.lng
    a = a + parseInt(a / 180) * 180 
    b = b + parseInt(b / 180) * 180 
    var a = Math.min(a, b)
    var b = Math.max(a, b)
    var c = Math.min(map.getBounds()._ne.lat, map.getBounds()._sw.lat)
    var d = Math.max(map.getBounds()._ne.lat, map.getBounds()._sw.lat)

    frame = [[a,c],[a,d],[b,c],[b,d]]
    rand = boundary[index]

    function inside(point, vs) {
        // ray-casting algorithm based on
        // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
        var x = point[0], y = point[1];
        var inside = false;
        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0], yi = vs[i][1];
            var xj = vs[j][0], yj = vs[j][1];
    
            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return true;
    };

    var temp = false
    for(i = 0; i<4;i++){
        if(inside(frame[i], rand)){
            temp = true
        }
    }
    for(i = 0; i<4;i++){
        if(inside(rand[i], frame)){
            temp = true
        }
    }
    return temp
}