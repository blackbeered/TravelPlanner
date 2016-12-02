import {Injectable} from '@angular/core';
import {Eintrag} from "./eintrag.model";

@Injectable()
export class EintragService {

  private LOCAL_STORAGE_KEY: string = 'eintraege'
  private eintraege: Eintrag[];

  constructor() {
    if (!localStorage[this.LOCAL_STORAGE_KEY]) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
    this.eintraege = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
  }

  public ermittleEintraege(): Eintrag[] {
    return this.eintraege;
  }

  public speichereEintrag(eintrag: Eintrag) {
    this.eintraege.push(eintrag);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.eintraege));
  }

}
