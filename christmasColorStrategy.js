var _brightnessFloor = 0.2;
var _brightness = _brightnessFloor;
var _brightnessStep = 0.2;

var _colors = [ [255, 0, 0], 
                [0, 255, 0], 
                [255, 255, 255] ];
var _colorIndex = 0;
var _colorStep = 1;

setInterval(function() {
	_brightness += _brightnessStep;
	if (_brightness > 1.0) {
		_brightnessStep *= -1;
		_brightness = 1 + _brightnessStep;	
	} else if (_brightness < _brightnessFloor) {
		_brightnessStep *= -1;
		_brightness = _brightnessStep;
		_colorIndex++;
		if (_colorIndex > 2)
			_colorIndex = 0;
	}
}, 1000);

function getColors(message) {
    return {
	red: _colors[_colorIndex][0],
        green: _colors[_colorIndex][1],
        blue: _colors[_colorIndex][2],	
        brightness: _brightness
    }
}

function strategy() {
	return {
		getColors: getColors
	};  
}

module.exports = strategy;