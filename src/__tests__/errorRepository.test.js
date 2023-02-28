import ErrorRepository from '../errorRepository';

test.each([
  [111, 'SyntaxError'],
  [222, 'ReferenceError'],
  [333, 'TypeError'],
  [444, 'RangeError'],
  [555, 'URIError'],
  [666, 'EvalError'],
])('code %d matches to error $s', (code, errorMessage) => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(code)).toBe(errorMessage);
});

test('invalid code 777 matches to error Unknown error', () => {
  const errorRepository = new ErrorRepository();
  expect(() => errorRepository.translate(777)).toThrow('Unknown error');
});
