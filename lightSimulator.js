var _totalLights;
var _ledStrip = [];

function clearScreen() {
    process.stdout.write('\033c');
}

function updateBrightness(brightness) {
    //0.0-1.0
}

function update() {
    clearScreen();
    drawStrip();
}

function setPixelRGB(lightIndex, red, green, blue) {
    //0-255
    _ledStrip[lightIndex] = true;
}

function setPixelOff(lightIndex) {
    _ledStrip[lightIndex] = false;
}

function allOff() {
    for(var i = 0; i < _totalLights; i++) {
        _ledStrip[i] = false;
    }
}

function drawStrip() {
    //draw lights
    for(var i = 0; i < _totalLights; i++) {
        var lightChar = _ledStrip[i] ? '\u25CF ' : '\u25CB '
        process.stdout.write(lightChar);
    }
    process.stdout.write('\n');

    //draw 10s digit
    for(var i = 0; i < _totalLights; i++) {
        var digit = i < 10 ? '0' : i.toString()[0];
        process.stdout.write(digit + ' ');
    }
    process.stdout.write('\n');
    
    //draw singles digit
    for(var i = 0; i < _totalLights; i++) {
        var digit = i < 10 ? i.toString()[0] : i.toString()[1];
        process.stdout.write(digit + ' ');
    }
    process.stdout.write('\n');
}

function lightSimulator(totalLights) {
    _totalLights = totalLights;

    return {
        update : update,
        updateBrightness: updateBrightness,
        allOff : allOff,
        setPixelOff : setPixelOff,
        setPixelRGB : setPixelRGB
    };
}

module.exports = lightSimulator;