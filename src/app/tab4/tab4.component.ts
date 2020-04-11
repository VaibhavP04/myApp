import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
})
export class Tab4Component implements OnInit {

  showAccountDetails = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showEditAccount() {
    this.showAccountDetails = true
  }

  logout() {
    const navExtas: NavigationExtras = {
      state: {
        logout: true
      }
    };
    this.router.navigate(['/login'], navExtas);
  }

}
