import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../class/User';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  movePages(){
  this.navCtrl.push('SignPage');
  console.log("KUY");
  }
  signin(){
    this.auth.auth.signInWithEmailAndPassword(this.user.id,this.user.password);
    this.navCtrl.push('LoginPage');
    console.log("KUy2")
  }

}
