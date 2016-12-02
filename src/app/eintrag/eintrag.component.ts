import {Component, OnInit} from '@angular/core';
import {EintragService} from "./shared/eintrag.service";
import {Eintrag} from "./shared/eintrag.model";

@Component({
  selector: 'app-eintrag',
  templateUrl: './eintrag.component.html',
  styleUrls: ['eintrag.component.less']
})
export class EintragComponent implements OnInit {

  ngOnInit() {
  }


}
