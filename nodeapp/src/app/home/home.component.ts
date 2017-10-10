import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchpageComponent } from '../searchpage/searchpage.component';



@Component({
  selector: 'cr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  openSearch(){
    this.nav.push(SearchpageComponent);
  }

}

