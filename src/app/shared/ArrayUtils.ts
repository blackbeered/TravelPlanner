import {Ensure} from "./EnsureUtils";
export class ArrayUtils {
  static contains(array: any[], search: any): boolean {
    Ensure.notNullAndNotUndefined(array);
    Ensure.notNullAndNotUndefined(search);
    return array.indexOf(search) !== -1;
  }

  static remove<K>(array: K[], search: K): any[] {
    Ensure.notNullAndNotUndefined(array);
    Ensure.notNullAndNotUndefined(search);
    if (this.contains(array, search)) {
      var index = array.indexOf(search);
      array.splice(index, 1);
    }
    return array;
  }

  static removeEntries<K>(array: K[], entriesToDelete: K[]): K[] {
    Ensure.notNullAndNotUndefined(array);
    Ensure.notNullAndNotUndefined(entriesToDelete);
    var result: K[] = ArrayUtils.copyOf(array);
    entriesToDelete.forEach((search: K) => {
      this.remove(result, search);
    });
    return result;
  }

  static copyOf<K>(array: K[]): any[] {
    Ensure.notNullAndNotUndefined(array);
    return array.map(input => {
      return input;
    });

  }

  static removeDuplicates(array: any[]): any[] {
    Ensure.notNullAndNotUndefined(array);
    return array.filter(this.filterFunctionToRemoveDuplicates);
  }

  static filterFunctionToRemoveDuplicates(item: any, pos: number, self: any): boolean {
    return self.indexOf(item) == pos;
  }

//
// static areAllMembersTrue(array:boolean[]):boolean {
//   return array.reduce(function (prev:boolean, current:boolean) {
//     return prev && current;
//   }, true);
// }
//
  static getRandomEntry<K>(array: K[]): K {
    Ensure.notNullAndNotUndefined(array);
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  static getRandomEntries<K>(array: K[]): K[] {
    Ensure.notNullAndNotUndefined(array);
    return array.filter((element) => {
      return Math.random() >= 0.5;
    });
  }

  static getAllOthers<T>(alle: T[], ohne: T[]): T[] {
    Ensure.notNullAndNotUndefined(alle);
    Ensure.notNullAndNotUndefined(ohne);
    return alle.filter((eintrag: T) => !ArrayUtils.contains(ohne, eintrag));
  }
}
