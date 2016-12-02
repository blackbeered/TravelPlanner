import {Component} from '@angular/core';
import {Eintrag} from "./eintrag/shared/eintrag.model";

const myEintraege: Eintrag[] = [
  {titel: 'a', zeit: new Date()},
  {titel: 'b', zeit: new Date()},
  {titel: 'c', zeit: new Date()}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.css',
    'app.component.less'
  ]
})

export class AppComponent {
  title = 'TravelPlanner';

}
