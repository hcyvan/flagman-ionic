import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlagPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flag',
  templateUrl: 'flag.html',
})
export class FlagPage {
  point: any;
  time = {
    date: '2017-09-05',
    time: '08:50',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlagPage');
  }

  getX() {
    return this.navParams.data.point ? this.navParams.data.point.lng : null
  }
  getY() {
    return this.navParams.data.point ? this.navParams.data.point.lat : null
  }
}
