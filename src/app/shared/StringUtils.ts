import {Ensure} from "./EnsureUtils";
export class StringUtils {


  static isBlank(obj: string) {
    return ((obj === undefined && !obj) || this.trim(obj) === '');
  }

  static isNotBlank(obj: string) {
    return (!StringUtils.isBlank(obj));
  }

  // copied from jquery start

  static rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // finds all whitespaces

  static trim(text: string) {
    return text == null ?
      '' :
      ( text + '' ).replace(this.rtrim, '');
  }

  // copied from jquery ende

  static contains(str: string, contains: string): boolean {
    Ensure.notNullAndNotUndefined(str);
    Ensure.notNullAndNotUndefined(contains);
    if (contains.length == 0) {
      return false;
    }
    return str.indexOf(contains) !== -1;
  }

  static generiereUUID(): string {
    // rfc4122 version 4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
