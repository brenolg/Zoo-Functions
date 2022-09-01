const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employes = data.employees.find((employe) =>
    employe.firstName === employeeName || employe.lastName === employeeName);
  if (employeeName === null || employeeName === undefined) {
    return {};
  }
  return employes;
}

module.exports = getEmployeeByName;
