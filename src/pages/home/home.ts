import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DisplayPage} from '../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  

  bills = function(){

    this.navCtrl.push(DisplayPage);
  }

}
