import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EintragComponent } from './eintrag/eintrag.component';
import { EintragErfassenComponent } from './eintrag/eintrag-erfassen/eintrag-erfassen.component';
import { EintragListeComponent } from './eintrag/eintrag-liste/eintrag-liste.component';
import {EintragService} from "./eintrag/shared/eintrag.service";

@NgModule({
  declarations: [
    AppComponent,
    EintragComponent,
    EintragErfassenComponent,
    EintragListeComponent,
    EintragListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EintragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
