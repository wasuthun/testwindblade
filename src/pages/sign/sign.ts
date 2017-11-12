import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../class/User';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

   user={} as User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  signup(){
    this.auth.auth.createUserWithEmailAndPassword(this.user.id,this.user.password);
    this.navCtrl.push('LoginPage');
  }



}
