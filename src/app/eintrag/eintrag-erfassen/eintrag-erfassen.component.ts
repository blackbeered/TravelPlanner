import {Component, OnInit} from '@angular/core';
import {Eintrag} from "../shared/eintrag.model";
import {EintragService} from "../shared/eintrag.service";

@Component({
  selector: 'app-eintrag-erfassen',
  templateUrl: './eintrag-erfassen.component.html',
  styleUrls: ['./eintrag-erfassen.component.css']
})
export class EintragErfassenComponent implements OnInit {
  eintrag: Eintrag = new Eintrag();

  constructor(private eintragService: EintragService) {
  }

  ngOnInit() {
  }

  public speichereEintrag(): void {
    this.eintragService.speichereEintrag(this.eintrag);
    this.eintrag = new Eintrag();
  }

}

