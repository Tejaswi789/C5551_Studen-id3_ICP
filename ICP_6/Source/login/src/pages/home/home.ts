import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

//import statements
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
password:string;
//Dependencies using in this class
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goLogin()
  {
    //getting the default localstorage assigned values
   var users = JSON.parse(localStorage.getItem("users"));
    var username = this.username;
    var password = this.password;
    if (this.username !== "" && this.password !== "") {
      //retrieving the logged in user by using filter function
      var user = users.filter(function (el)
           {
        return (el.username === username && el.password === password)
      });
      if (user.length > 0) {
        localStorage.setItem("loggedInUser", JSON.stringify(user[0]));
        this.navCtrl.setRoot(LoginPage);
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
  
  //for diaplaying messages
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
