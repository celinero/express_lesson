// set up .env variables
require('dotenv').config()
console.log(`Env variable message was:\n${process.env.NICE_MESSAGE}`);


const express = require('express');
// Initialize Express as an instance named "app".
const app = express();

// Separate these out in case we wanna use Docker or something to wrap the app.
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// we can receive JSON data from POST/PUT/PATCH/etc requests
app.use(express.json());

// for form data
app.use(express.urlencoded({extended:true}));

// Standard ExpressJS route, sends back a HTML response
app.get('/', (request, response) => {
  response.json("It's Tuesday yeah !");
});


const importedPostRouting = require('./Posts/postsRoutes');
app.use('/posts', importedPostRouting);


app.listen(PORT, HOST, () => {
  console.log("Server is running!")
});