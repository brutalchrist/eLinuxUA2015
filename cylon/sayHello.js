var Cylon = require('cylon');

Cylon.robot({
  name: "hablot",

  connections: {
    speech: { adaptor: 'speech', voice: 'es-f2', speed: 130 }
  },

  devices: {
    mouth: { driver: 'speech' }
  },

  work: function(my) {
    my.mouth.say("Hola mundo. Soy Hablot y ¡puedo hablar!");
  }
}).start();