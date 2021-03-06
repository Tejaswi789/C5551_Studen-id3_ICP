import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen) {
   this.initializeApp();
    var users = [
      {
        "username": "Guest",
        "firstname": "",
        "lastname": "",
        "password": "guest",
      }
    ]
    localStorage.setItem("users", JSON.stringify(users));
    }
  
  
  initializeApp() {
   this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    }
    
    
}


