var Twit = require('twit')

var T = new Twit({
    consumer_key:         'QzzqAVMAPw2Hb3q4sNstUKFd6'
  , consumer_secret:      'H3TzbyIMtFPrAAZ4CTY1UsvBn5xbIl1USwzwPCBDOM68LlSMm7'
  , access_token:         '12525302-6NIkLUsgcIEaQvQp00hovfFdxAWIh5lYRkbhUOI2C'
  , access_token_secret:  '0ZCwuJ7iuEOIoxuJbT3QhfY3gENHtUZzh5CTtt6NhEddI'
})

T.get('search/tweets', { q: 'eLinuxUA since:2015-11-16', count: 100 }, function(err, data, response) {
  console.log(data.statuses.length);
})