export class EnsureError implements Error {
  name: string = 'EnsureError';

  constructor(public message: string) {
    this['stack'] = (new Error())['stack'];
  }

  toString() {
    return this.name + ':  ' + this.message;
  }
}
