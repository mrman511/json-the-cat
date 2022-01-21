const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

//const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

//const fullQuery = URL + breedName;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});