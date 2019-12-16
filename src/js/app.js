export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(100, 'Ошибка 100');
    this.errors.set(101, 'Другая ошибка');
    this.errors.set(102, 'Еще одна ошибка');
    this.errors.set(103, 'Совсем другая ошибка');
    this.errors.set(104, 'Еще одна совсем другая ошибка');
  }
  
  translate(code) {
    if (!this.errors.has(code)) throw new Error('Unknown error');
    return this.errors.get(code);
  }
}