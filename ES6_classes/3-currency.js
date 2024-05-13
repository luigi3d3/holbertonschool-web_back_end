export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('Code must be a string');
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._code = code;
    this._name = name;
  }

  // Getter

  // Getter for code
  get code() {
    return this._code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter

  // Setter for code
  set code(newCode) {
    if (typeof newCode !== 'string') throw TypeError('Code must be a string');
    this._code = newCode;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
