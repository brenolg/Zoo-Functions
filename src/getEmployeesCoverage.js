const data = require('../data/zoo_data');

const { species, employees } = data;

const employeeName = (nome) => employees
  .find((employee) => employee.firstName === nome || employee.lastName === nome);

const employeeId = (id) => employees.find((employee) => employee.id === id);

const validaçãoEmpregado = (empreg) => {
  const info = (Object.keys(empreg).includes('id')) ? employeeId(empreg.id)
    : employeeName(empreg.name);
  return info;
};

const animaisTrabalhados = (idAnimais) => {
  const animais = [];
  const local = [];
  species.forEach((animal) => {
    if (idAnimais.includes(animal.id)) {
      animais.push(animal.name);
      local.push(animal.location);
    }
  });
  return [animais, local];
};

const objGenerator = (empregado, animais) => ({ id: empregado.id,
  fullName: `${empregado.firstName} ${empregado.lastName}`,
  species: animais[0],
  locations: animais[1],
});

const todosFuncionarios = () => {
  const funcionariosInfo = [];
  employees.forEach((funcionario) => {
    const idInfo = validaçãoEmpregado(funcionario);
    const idAnimais = idInfo.responsibleFor;
    const animais = animaisTrabalhados(idAnimais);
    const coberturaEmpregado = objGenerator(idInfo, animais);
    funcionariosInfo.push(coberturaEmpregado);
  });
  return funcionariosInfo;
};

function getEmployeesCoverage(empregado) {
  if (empregado !== undefined) {
    const idInfo = validaçãoEmpregado(empregado);
    if (idInfo === undefined && empregado !== undefined) {
      throw new Error('Informações inválidas');
    }
    const idAnimais = idInfo.responsibleFor;
    const animais = animaisTrabalhados(idAnimais);
    const coberturaEmpregado = objGenerator(idInfo, animais);
    return coberturaEmpregado;
  }
  return todosFuncionarios();
}

module.exports = getEmployeesCoverage;
