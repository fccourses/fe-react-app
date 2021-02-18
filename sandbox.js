class Test {
  constructor () {
    this._number = false;
    this._isRequired = false;
  }

  get number () {
    this._number = true;
    return this;
  }

  get isRequired () {
    this._isRequired = true;
    return this;
  }
}

const t = new Test();

console.log(t);
console.log(t.number);
console.log(t.isRequired);
console.log(t);
