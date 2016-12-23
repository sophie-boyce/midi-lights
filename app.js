var midiFilter = require('./midiFilter.js');
var lightStrategy = require('./twelveToneStrategy.js');

var strategy = lightStrategy(160);

midiFilter.openPort();

midiFilter.on('midiNote', strategy.midiHandler); 

process.stdin.on('data', function (text) {
    midiFilter.closePort();
    process.exit();
});