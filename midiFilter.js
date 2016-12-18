var midi = require('midi');
var EventEmitter = require('events');

var input = new midi.input();

var events = new EventEmitter();

var closePort = function() {
    input.closePort();
}

var openPort = function() {
    input.openPort(0);
}

function createFriendlyMessage(message, type) {
    return {
        messageType: type,
        note: message[1] - 21,
        velocity: message[2]
    };
}

input.on('message', function(deltaTime, message) {
  // The message is an array of numbers corresponding to the MIDI bytes: [status, data1, data2]
  // https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html has some helpful information interpreting the messages.
  if (message[0] == 144) {
      events.emit('midiNote', createFriendlyMessage(message, 'on'));
  } else if (message[0] == 128) {
      events.emit('midiNote', createFriendlyMessage(message, 'off'));
  }
});

module.exports = events;
module.exports.openPort = openPort;
module.exports.closePort = closePort;
