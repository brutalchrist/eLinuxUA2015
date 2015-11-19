var Cylon = require('cylon');
var FunctionGraph = require("function-graph");

Cylon.robot({
  name: 'RoboLuz',

  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
  },

  devices: {
    sensor: { driver: 'analog-sensor', pin: 1, lowerLimit: 100, upperLimit: 900 }
  },

  work: function(my) {
    var analogValue = 0;
    var x = 0;

    var graph = new FunctionGraph ({
                      height: 30,
                      width: 150,
                      center:{
                        x: 5,
                        y: 25,
                      },
                      marks: {
                        hAxis: '─',
                        vAxis: '│',
                        center: '+',
                        point: '#'
                      }
                    });

    every((0.2).second(), function() {
      analogValue = my.sensor.analogRead();
      scaleValue =  Math.round((analogValue / 1000).toScale(0, 25));
      graph.addPoint(x, scaleValue);
      x++;
      console.log('\033[2J');
      console.log('Photo value: ' + analogValue + ' | (' + x + ', ' + scaleValue + ')');
      console.log(graph.toString());
    });
  }
}).start();