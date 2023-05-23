
let Arr = process.argv.slice(2);
const request = require('request');
request(`https://api.thcatapi.com/v1/breeds/search/?q=${Arr[0]}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  if (error === "null") {
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //  console.log('body:', body); // Print the HTML for the Google homepage.
    if (body === "[]") {
      console.log("Meewwww");    //  if the requested breed is not found
    } else {
      const data = JSON.parse(body);   // use JSON.parse to convert the JSON string into an actual object
      console.log(data[0].description);
      console.log(typeof data);  // check what the type of the body is
    }
  } else {
    console.log("error happened. something is going wrong!");   //Handle request errors and print the error details to the screen
  }
});