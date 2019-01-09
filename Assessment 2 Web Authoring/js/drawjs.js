var width = window.innerWidth;
var height = window.innerHeight - 25;


var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();
stage.add(layer);


var canvas = document.createElement('canvas');
canvas.width = stage.width() / 2;
canvas.height = stage.height() / 2;


var image = new Konva.Image({
    image: canvas,
    x: stage.width() / 4,
    y: stage.height() / 4,
    stroke: 'green',
    shadowBlur: 5
});
layer.add(image);
stage.draw();


var context = canvas.getContext('2d');
context.strokeStyle = "#df4b26";
context.lineJoin = "round";
context.lineWidth = 5;


var isPaint = false;
var lastPointerPosition;
var mode = 'brush';


//mouse events
image.on('mousedown touchstart', function () {
    isPaint = true;
    lastPointerPosition = stage.getPointerPosition();

});



stage.addEventListener('mouseup touchend', function () {
    isPaint = false;
});

// drawing function
stage.addEventListener('mousemove touchmove', function () {
    if (!isPaint) {
        return;
    }

    if (mode === 'brush') {
        context.globalCompositeOperation = 'source-over';
    }
    if (mode === 'eraser') {
        context.globalCompositeOperation = 'destination-out';
    }
    context.beginPath();

    var localPos = {
        x: lastPointerPosition.x - image.x(),
        y: lastPointerPosition.y - image.y()
    };
    context.moveTo(localPos.x, localPos.y);
    var pos = stage.getPointerPosition();
    localPos = {
        x: pos.x - image.x(),
        y: pos.y - image.y()
    };
    context.lineTo(localPos.x, localPos.y);
    context.closePath();
    context.stroke();


    lastPointerPosition = pos;
    layer.batchDraw();
});



var select = document.getElementById('tool');
select.addEventListener('change', function () {
    mode = select.value;
});

