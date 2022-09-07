const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it(('teste se handlerElephants é uma função'), () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Não passando parametros a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Se o argumento passado for {} deve retornar uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it(('Retorno correto da função handlerElephant pega os parametros corretos'), () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it(('Retorna informação de parametro invalido caso receba um número'), () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it(('Retornocaso o parametro que não exista no objeto'), () => {
    expect(handlerElephants('naoExiste')).toBeNull();
  });
});
