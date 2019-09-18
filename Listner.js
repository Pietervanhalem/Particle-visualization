var ani01

var ani21
var ani22
var ani23
var ani24
var boundary = []
var zoom = []

var files = [
    'layer00',
    // 'layer21',
    // 'layer22',
    // 'layer23',
    // 'layer24',
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


function addCanvas(Q){
        if(map.getZoom() >= zoom[Q][0] && map.getZoom() < zoom[Q][1]){
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

        console.log(mapInFrame2(0))
    })
  })

function mapInFrame(index){
    var temp = false

    var points = boundary[index]

    var a = map.getBounds()._sw.lng
    var b = map.getBounds()._ne.lng

    a = a + parseInt(a / 180) * 180 
    b = b + parseInt(b / 180) * 180 

    var x1 = Math.min(a, b)
    var x2 = Math.max(a, b)
    var y1 = Math.min(map.getBounds()._ne.lat, map.getBounds()._sw.lat)
    var y2 = Math.max(map.getBounds()._ne.lat, map.getBounds()._sw.lat)
    for (i = 0; i < 4; i++) {
        console.log(x1,x2,y1,y2)
        if ((x1 < points[i][0]) & (points[i][0] < x2) & 
            (y1 < points[i][1]) & (points[i][1] < y2)) {
                temp = true
            }
    }

    var points = [[x1,y1],[x1,y2],[x2,y1],[x2,y2]]

    var x1 = Math.min(boundary[index][0][0], boundary[index][1][0])
    var x2 = Math.max(boundary[index][0][0], boundary[index][1][0])
    var y1 = Math.min(boundary[index][2][1], boundary[index][1][1])
    var y2 = Math.max(boundary[index][2][1], boundary[index][1][1])

    for (i = 0; i < 4; i++) {
        console.log(x1,x2,y1,y2)
        if ((x1 <= points[i][0]) & (points[i][0] <= x2) & 
            (y1 <= points[i][1]) & (points[i][1] <= y2)) {
                temp = true
            } 
    }
     return temp
}

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