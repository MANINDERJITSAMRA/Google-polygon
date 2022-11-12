import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
// import { environment } from './../environments/env';
import { AppComponent } from './app.component';
import { gmpolygonComponent } from './gm-polygon/gm-polygon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule, MatCardModule, MatChipsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    gmpolygonComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDQt13gmzLCRrstHE9h1pmtXbGU6fG88MY",
      libraries: ['places', 'drawing', 'geometry']
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
