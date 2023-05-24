
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log("Error happened. Something went wrong!");
      callback(error, null); // Pass the error to the callback
      return;
    }

    if (body === "[]") {
      console.log("Meewwww");
      callback(null, "Breed not found."); // Pass the message to the callback if breed not found
    } else {
      const data = JSON.parse(body);
      const description = data[0].description;
      callback(null, description); // Pass the description to the callback
    }
  });
};

module.exports = { fetchBreedDescription };
