var midiFilter = require('./midiFilter.js');
console.log('I am here');
midiFilter.openPort();

midiFilter.on('midiNote', function(message) {
    console.log(message);
}); 

process.stdin.on('data', function (text) {
    midiFilter.closePort();
    process.exit();
});