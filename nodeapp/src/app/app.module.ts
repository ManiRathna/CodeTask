import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Rooms } from '../providers/rooms';
import { HomeComponent } from './home/home.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { AvailableroomsComponent } from './availablerooms/availablerooms.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchpageComponent,
    AvailableroomsComponent,
    BookingpageComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [Rooms],
  bootstrap: [AppComponent]
})
export class AppModule { }
