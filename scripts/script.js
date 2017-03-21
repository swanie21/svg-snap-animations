var surface = Snap('#sun');
var circ = surface.circle(100, 100, 45);
circ.attr({
    fill: '#f8ff6b',
    strokeWidth: 10,
    stroke: '#eef731'
});

var car = Snap.select('#car');
car.stop().animate({transform: 't400,0'}, 3000, mina.easeout);
