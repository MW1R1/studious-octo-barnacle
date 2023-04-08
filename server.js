import express from 'express';
import { post } from 'superagent';
import path from 'path';

const app = express();
const port = 3000;

const clientID = process.env['a6e9ba36bd6add7b550d'];
const clientSecret = process.env['3989577f69c16dcb4c15dc4dd89bf6cf'];
const apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';

let xappToken;
console.log(process.env.clientID);
console.log(process.env.clientSecret);


// Make API request to obtain xapp_token
post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(err, res) {
    if (err) {
      console.error(err);
    } else {
      xappToken = res.body.token;
      console.log(`xapp_token: ${xappToken}`);
      // Start the server once the token has been retrieved
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
    }
  });

// Serve the homepage
app.get('/', (req, res) => {
  // Code to retrieve featured artwork or display search options
  // Code to filter search results by artist, style, and medium
  // Code to display artwork details, such as artist, title, dimensions, and price
  // Code to allow users to add artwork to their cart and complete purchases
  // Code to display a list of purchased artwork with details and purchase dates
  res.send('Homepage');
});

// Serve the artwork details page
app.get('/artwork/:id', (req, res) => {
  // Code to retrieve artwork details by ID, including images and descriptions
  res.send(`Artwork details for ID ${req.params.id}`);
});

// Serve the shopping cart page
app.get('/cart', (req, res) => {
  // Code to display a summary of the user's cart, with options to modify and complete purchases
  res.send('Shopping cart');
});
