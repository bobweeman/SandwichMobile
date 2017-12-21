import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  username;
  magic:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username="Ama";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  sayHello(){
    alert("Hello");
  }

  showContacts(){
    this.magic=true;
  }
  toggleContacts() {
  this.magic =!this.magic;
  }

}
