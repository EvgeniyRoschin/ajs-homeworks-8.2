/* eslint-disable linebreak-style */
import ErrorRepository from '../app';

const err = new ErrorRepository();

test('Has error code', () => {
  expect(err.translate(104)).toBe('Еще одна совсем другая ошибка');
});

test('Has error code', () => {
  expect(() => err.translate(201)).toThrow('Unknown error');
});
