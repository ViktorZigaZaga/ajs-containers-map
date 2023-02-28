export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map([
      [111, 'SyntaxError'],
      [222, 'ReferenceError'],
      [333, 'TypeError'],
      [444, 'RangeError'],
      [555, 'URIError'],
      [666, 'EvalError'],
    ]);
  }

  translate(code) {
    if (!this.errorMap.has(code)) {
      throw new Error('Unknown error');
    }
    return this.errorMap.get(code);
  }
}
