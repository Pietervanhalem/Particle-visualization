var boundary = []
var zoom = []

var whiteRampColors = {
  0.0: '#ffffffff',
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
        whiteRampColors
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
  for (i = 0; i < 4; i++) {
    if ((x1 < points[i][0]) && (points[i][0] < x2) &&
        (y1 < points[i][1]) && (points[i][1] < y2)) {
      temp = true
    }
  }

  var points = [[x1,y1],[x1,y2],[x2,y1],[x2,y2],[(x1+x2)/2, y1],[(x1+x2)/2, y2], [x1, (y1+y2)/2], [x2, (y1+y2)/2] ]

  var x1 = Math.min(boundary[fileIndex][0][0], boundary[fileIndex][1][0])
  var x2 = Math.max(boundary[fileIndex][0][0], boundary[fileIndex][1][0])
  var y1 = Math.min(boundary[fileIndex][2][1], boundary[fileIndex][1][1])
  var y2 = Math.max(boundary[fileIndex][2][1], boundary[fileIndex][1][1])
  for (i = 0; i < 4; i++) {
    if ((x1 < points[i][0]) && (points[i][0] < x2) &&
        (y1 < points[i][1]) && (points[i][1] < y2)) {
      temp = true
    }
  }
  return temp
}

map.on('load', function(){
    addCanvas(0)
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