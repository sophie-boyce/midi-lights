var _colors = [ [255, 0, 0], 
                [0, 255, 0], 
                [255, 255, 255] ];

function getColors(message) {
	var index = Math.floor(Math.random() * 3);

	return {
		green: _colors[index][1],
		red: _colors[index][0],
		blue: _colors[index][2],
		brightness: 1
	};
}

function strategy() {
	return {
		getColors: getColors
	};  
}

module.exports = strategy;

