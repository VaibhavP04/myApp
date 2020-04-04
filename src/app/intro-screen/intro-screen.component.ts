import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-screen',
  templateUrl: './intro-screen.component.html',
  styleUrls: ['./intro-screen.component.scss'],
})
export class IntroScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToLoginScreen(event) {
    this.router.navigate(['/login']);
  }

}
