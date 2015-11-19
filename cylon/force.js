var Cylon = require('cylon');
var figlet = require('figlet');

Cylon.robot({
  connections: {
    speech: { adaptor: 'speech', voice: 'es-m2', speed: 130 },
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
  },

  devices: {
    pin: { driver: 'analog-sensor', pin: 0, connection: 'arduino' },
    mouth: { driver: 'speech', connection: 'speech' }
  },

  work: function(my) {
    every((1).second(), function() {
      if (my.pin.analogRead() > 500) {
        my.mouth.say("¡OUCH!");
        console.log(figlet.textSync('Ouch!', {
          horizontalLayout: 'default',
          verticalLayout: 'default'
        }));
      }
    });
  }
}).start();
