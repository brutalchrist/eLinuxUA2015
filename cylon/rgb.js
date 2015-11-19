var Cylon = require('cylon');

Cylon.robot({
  name: 'RoColor',

  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
  },

  devices: {
    leds: { driver: 'rgb-led', redPin: 11, greenPin: 10, bluePin: 9 },
  },

  work: function(my) {
    var color;
    every((1).second(), function() {
      if (color == "ff0000") {
        color = "00ff00"
      } else
      {
        color = "ff0000"
      };
      my.leds.setRGB(color);
    });
  }
}).start();