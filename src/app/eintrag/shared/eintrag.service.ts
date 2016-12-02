import {Injectable} from '@angular/core';
import {Eintrag} from "./eintrag.model";

@Injectable()
export class EintragService {

  private eintrage: Eintrag[];

  constructor() {
    this.eintrage = [
      {titel: 'a', zeit: new Date()},
      {titel: 'b', zeit: new Date()},
      {titel: 'c', zeit: new Date()}
    ];
  }

  public ermittleEintraege(): Eintrag[] {
    return this.eintrage;
  }

}
