import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('initial').then((initialVal) => {
        this.storage.get('secondLaunch').then((secondLaunch) => {
          if (initialVal && secondLaunch) {
            this.router.navigate(['/tabs']);
          } else if (initialVal !==null) {
            this.storage.set('secondLaunch', true);
            this.router.navigate(['/login']);
          } else {
            this.storage.set('initial', true);
            this.router.navigate(['/intro']);
          }
        })
      });
    });
  }
}
