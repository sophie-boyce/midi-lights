var midiFilter = require('./midiFilter.js');

midiFilter.openPort();

midiFilter.on('midiNote', function(message) {
    console.log(message);
}); 

process.stdin.on('data', function (text) {
    midiFilter.closePort();
    process.exit();
});