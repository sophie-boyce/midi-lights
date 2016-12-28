var midiFilter = require('./midiFilter.js');
var light = require('./twelveToneStrategy.js');
//var color = require('./colorStrategy.js');
//var color = require('./christmasColorStrategy.js');
var color = require('./randomColorStrategy.js');

//var colorStrategy = color(0, 255, 0, 1.0);
var colorStrategy = color();
var lightStrategy = light(160, colorStrategy);

midiFilter.openPort();

midiFilter.on('midiNote', lightStrategy.midiHandler); 

process.stdin.on('data', function (text) {
    midiFilter.closePort();
    process.exit();
});