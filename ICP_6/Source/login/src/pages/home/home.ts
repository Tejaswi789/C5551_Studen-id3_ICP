import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goLogin()
  {
   var users = JSON.parse(localStorage.getItem("users"));
    var username = this.username;
    var password = this.password;
    if (this.username !== "" && this.password !== "") {
      var user = users.filter(function (el) {
        return (el.username === username && el.password === password)
      });
      if (user.length > 0) {
        localStorage.setItem("loggedInUser", JSON.stringify(user[0]));
        this.navCtrl.setRoot(HomePage);
      } else {
        this.presentToast("Invalid Username/Password.");
      }
    }else{
      this.presentToast("Please fill all the details and login.");
    }
  }
  goRegister()
  {
  this.navCtrl.push(RegisterPage);
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
