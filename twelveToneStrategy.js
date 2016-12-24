//var lightApi = require('./lightSimulator.js');
var LightApi = require('lpd8806');


var lights = new LightApi(160, '/dev/spidev0.0');

var _totalLights;
var _toneSet = [];

lights.setMasterBrightness(1.0);
lights.allOFF();

function midiHandler(message) {
	var tone = message.note % 12;
	lights.allOFF();
	if(message.messageType == 'on')
		_toneSet[tone] = true;
	else if(message.messageType == 'off')
		_toneSet[tone] = false;

	for(var i = 0; i < 12; i++) {
		if(_toneSet[i])
			lights.setPixelRGB(i, 255, 0, 0);
	}
	
	lights.update();
}

function strategy(totalLights) {
	_totalLights = totalLights;

	return {
		midiHandler: midiHandler
	};  
}

module.exports = strategy;