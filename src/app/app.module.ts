import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {EintragComponent} from './eintrag/eintrag.component';
import {EintragErfassenComponent} from './eintrag/eintrag-erfassen/eintrag-erfassen.component';
import {EintragListeComponent} from './eintrag/eintrag-liste/eintrag-liste.component';
import {EintragService} from "./eintrag/shared/eintrag.service";
import {HereMapsComponent} from './here-maps/here-maps.component';
import {HereMapsService} from "./here-maps/here-maps.service";

@NgModule({
  declarations: [
    AppComponent,
    EintragComponent,
    EintragErfassenComponent,
    EintragListeComponent,
    EintragListeComponent,
    HereMapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EintragService, HereMapsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
