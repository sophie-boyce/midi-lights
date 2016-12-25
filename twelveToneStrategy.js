//var lightApi = require('./lightSimulator.js');
var LightApi = require('lpd8806');


var lights = new LightApi(160, '/dev/spidev0.0');

var _totalLights;
var _colorStrategy;
var _toneSet = [];

lights.setMasterBrightness(1.0);
lights.allOFF();
turnAllTonesOff();

function turnAllTonesOff() {
	for(var i = 0; i < 12; i++) {
		_toneSet[i] = 0;
	}
}

function midiHandler(message) {
	var tone = message.note % 12;
	lights.allOFF();

	var colors = _colorStrategy.getColors(message);
	lights.setMasterBrightness(colors.brightness);

	if(message.messageType == 'on')
		_toneSet[tone]++;
	else if(message.messageType == 'off')
		_toneSet[tone]--;

	for(var i = 0; i < 12; i++) {
		if(_toneSet[i] > 0)
			turnOnLightsForTone(i, colors.red, colors.green, colors.blue);
	}
	
	lights.update();
}

function turnOnLightsForTone(tone, red, green, blue) {
	var i = tone;
	while(i < _totalLights) {
		lights.setPixelRGB(i, red, green, blue);
		i = i + 12;
	}
}

function strategy(totalLights, colorStrategy) {
	_totalLights = totalLights;
	_colorStrategy = colorStrategy;

	return {
		midiHandler: midiHandler
	};  
}

module.exports = strategy;