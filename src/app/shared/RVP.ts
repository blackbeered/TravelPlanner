import {ArrayUtils} from "./ArrayUtils";
export class RVP {

  public static getRandomAlphaNumeric(length: number): string {
    var result = 'Str_';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    while (length - result.length > 0) {
      result += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return result;
  }

  public static getRandomNumeric(length: number): string {
    var result = '';
    var possible = '0123456789';

    for (var i = 0; i < length; i++) {
      result += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return result;
  }

  public static getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  // max exclusive
  // returns 0 bis (max-1)
  public static getRandomNumber(maxValue?: number): number {
    var MAX_INT_32_BIT = 2147483647;
    var usedMax = (maxValue != null) ? maxValue : MAX_INT_32_BIT;
    return Math.floor(Math.random() * usedMax);
  }

  public static getRandomPercent(): number {
    return 1 + this.getRandomNumber(98) + (this.getRandomNumber(9) / 10) + (this.getRandomNumber(9) / 100);
  }

  public static getRandomMoneyValue(): number {
    return this.getRandomNumber(1000000) + 10000;
  }

  public static createRandomDate(): Date {
    return new Date(1900 + RVP.getRandomNumber(100), RVP.getRandomNumber(11), 1 + RVP.getRandomNumber(27));
  }

  public static createRandomDateWithTime(): Date {
    return new Date(1900 + RVP.getRandomNumber(100), RVP.getRandomNumber(11), 1 + RVP.getRandomNumber(27), RVP.getRandomNumber(23), RVP.getRandomNumber(59), RVP.getRandomNumber(59));
  }

  public static getRandomEntry(list: any[]): any {
    return list[Math.floor(Math.random() * list.length)];
  }

  public static getOtherRandomEntry(list: any[], ohne: any): any {
    ArrayUtils.remove(list, ohne);
    return this.getRandomEntry(list);
  }

  public static getNullOrUndefined(): any {
    return this.getRandomBoolean() ? null : undefined;
  }

}
