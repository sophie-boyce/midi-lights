var midiFilter = require('./midiFilter.js');
var light = require('./twelveToneStrategy.js');
//var color = require('./colorStrategy');
var color = require('./christmasColorStrategy');

//var colorStrategy = color(0, 255, 0, 1.0);
var colorStrategy = color();
var lightStrategy = light(160, colorStrategy);

midiFilter.openPort();

midiFilter.on('midiNote', lightStrategy.midiHandler); 

process.stdin.on('data', function (text) {
    midiFilter.closePort();
    process.exit();
});