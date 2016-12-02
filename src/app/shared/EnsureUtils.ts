import {EnsureError} from "./EnsureError";
export class Ensure {

  public static notNullAndNotUndefined(value: any, msg?: string): void {
    if (value === null || value === undefined) {
      throw new EnsureError(msg != null ? msg : 'expected "' + value + '" to not null');
    }
  }

  public static notBlank(value: any, msg?: string): void {
    if (value === null || value === undefined || (typeof value === 'string' && trim(value) === '')) {
      throw new EnsureError(msg != null ? msg : 'expected "' + value + '" to be not blank');
    }
  }

  public static isUndefined(value: any, msg?: string): void {
    if (value !== undefined) {
      throw new EnsureError(msg != null ? msg : 'expected "' + value + '" to be undefined');
    }
  }

  public static isTrue(value: boolean, msg?: string): void {
    if (!value) {
      throw new EnsureError(msg != null ? msg : 'expected "' + value + '" to be true');
    }
  }

  public static isFalse(value: boolean, msg?: string): void {
    if (value) {
      throw new EnsureError(msg != null ? msg : 'expected "' + value + '" to be false');
    }
  }

  public static isEquals(actual: any, expected: any, msg?: string): void {
    if (actual !== expected) {
      throw new EnsureError(msg != null ? msg : 'expected "' + actual + '" to be equal "' + expected + '"');
    }
  }

  public static notEmpty(value: any[], msg?: string): void {
    if (value.length == 0) {
      throw new EnsureError(msg != null ? msg : 'expected "' + value + '" to be not empty');
    }
  }

  public static empty(value: any[], msg?: string): void {
    if (value.length > 0) {
      throw new EnsureError(msg != null ? msg : 'expected "[' + value + ']" to be empty');
    }
  }

}


var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // finds all whitespaces

function trim(text: string) {
  return text == null ?
    '' :
    ( text + '' ).replace(rtrim, '');
}
