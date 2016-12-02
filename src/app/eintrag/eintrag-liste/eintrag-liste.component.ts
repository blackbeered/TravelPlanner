import {Component, OnInit} from '@angular/core';
import {Eintrag} from "../shared/eintrag.model";
import {EintragService} from "../shared/eintrag.service";

@Component({
  selector: 'app-eintrag-liste',
  templateUrl: './eintrag-liste.component.html',
  styleUrls: ['eintrag-liste.component.less']
})
export class EintragListeComponent implements OnInit {

  eintraege: Eintrag[];
  eintragService: EintragService;

  constructor(_eintragService_: EintragService) {
    this.eintragService = _eintragService_;
    this.eintraege = _eintragService_.ermittleEintraege();
  }

  public editEintrag(eintrag: Eintrag): void {
    this.eintragService.editEintrag(eintrag);
  }

  public deleteEintrag(eintrag: Eintrag): void {
    this.eintragService.deleteEintrag(eintrag);
  }

  ngOnInit() {
  }

}
