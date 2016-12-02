import {Injectable} from '@angular/core';
import {Eintrag} from "./eintrag.model";
import {ArrayUtils} from "../../shared/ArrayUtils";

@Injectable()
export class EintragService {

  private LOCAL_STORAGE_KEY: string = 'eintraege'
  private eintraege: Eintrag[];
  private currentEintrag: Eintrag;

  constructor() {
    if (!localStorage[this.LOCAL_STORAGE_KEY]) {
      this.eintraege = [];
      this.saveListeToLocalStorage()
    }
    this.eintraege = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    this.currentEintrag = new Eintrag();
  }

  public ermittleEintraege(): Eintrag[] {
    return this.eintraege;
  }

  public getCurrentEintrag(): Eintrag {
    return this.currentEintrag;
  }

  public speichereEintrag(): void {
    let current: Eintrag[] = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    if (current.filter(e => e.id == this.currentEintrag.id).length == 0) {
      this.eintraege.push(this.currentEintrag);
    }
    this.saveListeToLocalStorage();
    this.currentEintrag = new Eintrag;

  }

  public editEintrag(eintrag: Eintrag): void {
    this.currentEintrag = eintrag;
  }

  public deleteEintrag(eintrag: Eintrag): void {
    ArrayUtils.remove(this.eintraege, eintrag);
    this.saveListeToLocalStorage();
  }

  private saveListeToLocalStorage(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.eintraege));
  }
}
