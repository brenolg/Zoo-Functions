const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employe = data.employees.find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
  if (employeeName === null || employeeName === undefined){
    return {}
  }
  return employe
}

module.exports = getEmployeeByName;
