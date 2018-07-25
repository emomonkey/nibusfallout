import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { TimetablesComponent } from './timetables/timetables.component';

@NgModule({
  declarations: [
    AppComponent,
    TimetablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCC4-4m5KQrhlUorOqdP4oOZ8dmxc5Ag3o'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
