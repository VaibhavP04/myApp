import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeProducts() {
    this.router.navigate(['/products'])
  }

}
