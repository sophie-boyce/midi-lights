var lightSim = require('./lightSimulator.js');

var totalLights = 20;
var lightStrip = lightSim(totalLights);

var i = 0;
setInterval(() => {
    lightStrip.allOff();    
    lightStrip.setPixelRGB(i, 255, 255, 255);
    lightStrip.update();
    i++;
    if (i == totalLights)
        i = 0;
}, 500);
