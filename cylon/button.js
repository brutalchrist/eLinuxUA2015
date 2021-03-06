var Cylon = require('cylon');
var Spotify = require('spotify-node-applescript');

Cylon.robot({
  name: 'SpotyBot',

  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
  },

  devices: {
    button: { driver: 'button', pin: 7 }
  },

  work: function(my) {
    my.button.on('push', function() {
      Spotify.playTrack('spotify:track:5jTGFXKYYwiDqFUY3vtx1f', function(){
        Spotify.getTrack(function(err, track){
          console.log('Dance with \'' + track.artist + '\' -> \'' + track.name + '\'');
        });
      });
    });
  }
}).start();