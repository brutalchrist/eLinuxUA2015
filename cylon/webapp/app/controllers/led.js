var Cylon = require('cylon');

module.exports = function(app) {

  Cylon.robot({
    connections: {
      arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
    },

    devices: {
      trece: { driver: 'led', pin: 13 }
    },

    work: function (my) {
      app.route('/api/:led/:position').get(function(req, res, next) {
        var led = req.params.led;
        if(req.params.position == 'on') {
          if( led == '13' )     my.trece.turnOn();
        }
        else {
          if( led == '13' )     my.trece.turnOff();
        }
        res.sendStatus(200);
      });
    }
  }).start();
};