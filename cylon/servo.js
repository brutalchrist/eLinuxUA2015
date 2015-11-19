var Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
  },

  devices: {
    servo: { driver: 'servo', pin: 3 }
  },

  work: function(my) {
	var angle = 0 ;
    my.servo.angle(angle);
    every((1).second(), function() {
		angle = angle + 90 ;
		if (angle > 180) {
			angle = 0
		}
		my.servo.angle(angle);
    });
  }
}).start();