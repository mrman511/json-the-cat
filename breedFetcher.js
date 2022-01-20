const request = require("request");

const args = process.argv.slice(2);

const URL = "https://api.thecatapi.com/v1/images/search?breed_ids=";

const breedName = args[0];
//const localPath = "./breedInfo.js";
const fullQuery = URL + breedName;

//console.log(fullQuery)
const fileWriter = (URLPath) => {


  request(URLPath, (error, response, body) => {

    const data = JSON.parse(body);
    
    if (!data[0]) {
      console.log("Requested breed was not found!");
      process.exit();
    } else {
      let breedInfo = data[0]['breeds'];
      console.log(breedInfo[0]['description']);
    }
    
  });
};

fileWriter(fullQuery);