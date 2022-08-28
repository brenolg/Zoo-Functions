const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
    const specieAge = data.species.find((specie) => specie.name === animal);
    return specieAge.residents.every((i) => i.age >= age);
  
}

module.exports = getAnimalsOlderThan;



