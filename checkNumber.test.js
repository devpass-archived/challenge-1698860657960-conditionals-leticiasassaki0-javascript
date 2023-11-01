const checkNumber = require('./checkNumber');

test('Check if number is positive', () => {
  expect(checkNumber(5)).toBe('Positive');
});

test('Check if number is negative', () => {
  expect(checkNumber(-5)).toBe('Negative');
});

test('Check if number is zero', () => {
  expect(checkNumber(0)).toBe('Zero');
});