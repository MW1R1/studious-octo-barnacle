const express = require('express');
const request = require('superagent');
const path = require('path');

const app = express();
const port = 3000;

const clientID = 'a6e9ba36bd6add7b550d';
const clientSecret = '3989577f69c16dcb4c15dc4dd89bf6cf';
const apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

let xappToken;

// Make API request to obtain xapp_token
request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(err, res) {
    if (err) {
      console.error(err);
    } else {
      xappToken = res.body.token;
      console.log(`xapp_token: ${xappToken}`);
    }
  });

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
