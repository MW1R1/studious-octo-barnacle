var request = require('superagent');

var clientID = 'a6e9ba36bd6add7b550d',
    clientSecret = '3989577f69c16dcb4c15dc4dd89bf6cf',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    xappToken;

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(res) {
    xappToken = res.body.token; 
  });
