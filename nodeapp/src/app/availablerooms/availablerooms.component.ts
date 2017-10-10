import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookingpageComponent } from '../bookingpage/bookingpage.component';

@Component({
  selector: 'cr-availablerooms',
  templateUrl: './availablerooms.component.html',
  styleUrls: ['./availablerooms.component.css']
})
export class AvailableroomsComponent implements OnInit {
  navParams: any;

  rooms: any;
    
    constructor(public nav: NavController, public AvailableroomsComponent.newFunction().navParams: NavParams) {
           this.rooms = this.navParams.get('rooms');
       }
    
       bookRoom(room){
           this.nav.push(BookingpageComponent , {
               room: room,
               details: this.navParams.get('details')
           });
       }

  ngOnInit() {
  }


    private static newFunction() {
        return this;
    }
}
