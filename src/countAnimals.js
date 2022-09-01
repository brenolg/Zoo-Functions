const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalTotal = {};
    data.species.forEach((specie) => {
      animalTotal[specie.name] = specie.residents.length;
    });
    return animalTotal;
  }
  if (animal.sex === undefined) {
    const speciesChosen = data.species.find((specie) => animal.specie === specie.name);
    const animalNumbers = speciesChosen.residents.length;
    return animalNumbers;
  }
  const speciesSex = data.species.find((specie) => animal.specie === specie.name).residents;
  const sexAnimal = speciesSex.filter((sexChosen) => sexChosen.sex === animal.sex);
  return sexAnimal.length;
}

module.exports = countAnimals;
