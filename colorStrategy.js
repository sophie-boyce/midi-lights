function getColors(message) {
    return {
        green: _green,
        red: _red,
        blue: _blue,
        brightness: _brightness
    }
}

function strategy(red, green, blue, brightness) {
    _red = red;
    _green = green;
    _blue = blue;
	_brightness = brightness;

	return {
		getColors: getColors
	};  
}

module.exports = strategy;