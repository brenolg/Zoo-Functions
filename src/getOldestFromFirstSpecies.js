const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idFind = data.employees.find((employee) => employee.id === id);
  const idFindSpecie = idFind.responsibleFor[0];
  const speciesResidents = data.species.find((specie) => specie.id === idFindSpecie).residents;
  const oldAnimal = speciesResidents.sort((a, b) => b.age - a.age)[0];
  const resposta = [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
  return resposta;
}

module.exports = getOldestFromFirstSpecies;
