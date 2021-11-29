const express = require('express');
const { randomNumberGenerator } = require('./postsFunctions');


// Create a bundle of routes. We'll export this out and then import it into src/index.js.
const routes = express.Router();

// This is the "root" route for the Router instance. 
// Its actual name in the URL will depend on how it's configured in src/index.js
routes.get('/', (request, response) => {
  response.json(`Received a request on ${request.originalUrl}`);
});

// routes.get('/randomNumber', async (request, response) => {     ???
//   let asyncResult = await someAsyncFunction()
//   response.send(`<h1>${randomNumberGenerator()}</h1>`);
// });

routes.get('/randomNumber',(request,response)=>{
  response.send(`<h1>${randomNumberGenerator()}</h1>`); 
});


// Set up route params with the colon before the name.
routes.get('/:postID', (request, response) => {
  response.json(`Route param was ${request.params.postID}`);
});

// Use Postman or another HTTP tool to visit a POST route.
routes.post('/:postID', (request, response) => {

  let submittedData = request.body;
  console.log(JSON.stringify(submittedData));

  let submittedName = request.body.name.toUpperCase();  
  submittedName += submittedName;

  // for form URLencoded submission
  // let submittedPokemon = JSON.parse(request.body.favouritePokemon).name;

  // for raw json submission
  let submittedPokemon = request.body.favouritePokemon.name;

  response.json(`Received fave Pokemon of ${rsubmittedPokemon} `);
});

module.exports = routes;