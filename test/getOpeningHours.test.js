const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso não receba parametros', () => {
    const actual = getOpeningHours();
    const expected = { Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } };
    expect(actual).toEqual(expected);
  });

  it('Caso as horas não receber uma string de números', () => {
    expect(() => getOpeningHours('Monday', 'AB:21-AM')).toThrowError('The hour should represent a number');
  });

  it('Caso não for AM ou PM', () => {
    expect(() => getOpeningHours('Monday', '11:30-XM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Caso o parametro dia errado', () => {
    expect(() => getOpeningHours('Domingo', '12:23-PM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Caso os minutos não estiver correto', () => {
    expect(() => getOpeningHours('Monday', '12:60-PM')).toThrowError('The minutes must be between 0 and 59');
  });

  it('Caso as horas não estiver correto', () => {
    expect(() => getOpeningHours('Monday', '13:29-PM')).toThrowError('The hour must be between 0 and 12');
  });

  it('Caso receba dia e hora de funcionamento', () => {
    const actual = getOpeningHours('Wednesday', '04:38-PM');
    expect(actual).toEqual('The zoo is open');
  });

  it('Caso receba dia e hora de não funcionamento', () => {
    const actual = getOpeningHours('Monday', '12:37-AM');
    expect(actual).toEqual('The zoo is closed');
  });
});
