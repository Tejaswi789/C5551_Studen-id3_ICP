import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
user={
"username":"",
"firstname":"",
"lastname":"",
"password":"",
};
repass:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  Register()
  {
  var users = JSON.parse(localStorage.getItem("users"));
    if (this.user.username !== "" && this.user.firstname !== "" && this.user.lastname !== "" && this.user.password !== "" && this.repass !== "") {
      if(this.user.password === this.repass){
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
      this.presentToast("Successfully registered.");
      this.navCtrl.setRoot(LoginPage);
      }
      else{
        this.presentToast("Password missmatch.");
      }
    }else{
      this.presentToast("Please fill all the details.");
    }
    }
  
    presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
  
  }


