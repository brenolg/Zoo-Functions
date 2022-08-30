const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
    if (animal === undefined) {
    const animalTotal = {};
    data.species.forEach((specie) => {
      animalTotal[specie.name] = specie.residents.length
    
    });
    return animalTotal;
  }

  if (animal.sex === undefined) {
    const species = data.species.find((specie) => animal.specie === specie.name);
    animalNumber = species.residents.length;
  return animalNumber;

  }
  const speciesSex = data.species.find((specie) => animal.specie === specie.name).residents;
  const sexAnimal = speciesSex.filter((sexChosen) => sexChosen.sex === animal.sex);
  return sexAnimal.length;
  
  
}

module.exports = countAnimals;



