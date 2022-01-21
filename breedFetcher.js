const request = require("request");



//const breedName = args[0];
//const localPath = "./breedInfo.js";
//const fullQuery = URL + breedName;

//console.log(fullQuery)
const fetchBreedDescription = function(breedName, callback) {
  breedName = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  //console.log(breedName)
  request(breedName, (error, response, body) => {

    const data = JSON.parse(body);
    
    if (!data[0]) {
      callback('Not a vailid breed name', null);
      process.exit();
    } else {
      //let breedInfo = data[0]['breeds'];
      callback(null, data[0]['description']);
      //console.log(data);
    }
    
  });
};

//fetchBreedDescription(URL);

module.exports = {
  fetchBreedDescription,
};