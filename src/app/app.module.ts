import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { TimetablesComponent } from './timetables/timetables.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TimetablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apikey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
