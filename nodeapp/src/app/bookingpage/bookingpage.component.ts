import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Rooms } from '../../providers/rooms';



@Component({
  selector: 'cr-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit {
  room: any;
  details: any;
  checkIn: any;
  checkOut: any;
  constructor(public nav: NavController, public navParams: NavParams, public roomsService: Rooms, public loadingCtrl: LoadingController) {
    this.room = this.navParams.get('room');
    this.details = this.navParams.get('details');
    this.checkIn = new Date(this.details.from).toString().substring(0,15);
    this.checkOut = new Date(this.details.to).toString().substring(0,15);
}
book(){
  
         let newReservation = {
             _id: this.room._id,
             from: this.details.from.substring(0,10),
             to: this.details.from.substring(0,10)
         }
  
         let loading = this.loadingCtrl.create({
             content: "Booking room..."
         });
  
         loading.present();
  
         this.roomsService.reserveRoom(newReservation).then((res) => {
  
             loading.dismiss();
             this.nav.popToRoot();
  
         }, (err) => {
             console.log(err);
         });
  
     }

  ngOnInit() {
  }

}
