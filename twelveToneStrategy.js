//var lightApi = require('./lightSimulator.js');
var LightApi = require('lpd8806');


var lights = new LightApi(160, '/dev/spidev0.0');

var _totalLights;
var _ledStrip = [];

lights.setMasterBrightness(1.0);
lights.allOFF();

function midiHandler(message) {
	lights.setPixelRGB(0, 255, 0, 0);
	lights.update();
	console.log('fedget');
}

function strategy(totalLights) {
	_totalLights = totalLights;

	return {
		midiHandler: midiHandler
	};  
}

module.exports = strategy;