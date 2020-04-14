import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  categoryId;
  displayList;
  restraunts = [
    {
      id:1,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    },
    {
      id:2,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    },
    {
      id:3,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    },
    {
      id:4,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    },
    {
      id:5,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    },
    {
      id:6,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    },
    {
      id:7,
      categoryName: 'Restraunts',
      categoryId : 1,
      name: "Happy Bones",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/ic_plateone.png"
    }
  ];

  groceries = [
    {
      id:1,
      categoryName: 'Grocery & Vegetables',
      categoryId : 2,
      name: "Market Box",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/grocerious.png"
    },
    {
      id:2,
      categoryName: 'Grocery & Vegetables',
      categoryId : 2,
      name: "Market Box",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/grocerious.png"
    },
    {
      id:3,
      categoryName: 'Grocery & Vegetables',
      categoryId : 2,
      name: "Market Box",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/grocerious.png"
    },
    {
      id:4,
      categoryName: 'Grocery & Vegetables',
      categoryId : 2,
      name: "Market Box",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/grocerious.png"
    },
    {
      id:5,
      categoryName: 'Grocery & Vegetables',
      categoryId : 2,
      name: "Market Box",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/grocerious.png"
    },
    {
      id:6,
      categoryName: 'Grocery & Vegetables',
      categoryId : 2,
      name: "Market Box",
      address: "#394, Some stt, Bangalore, 560011",
      status: "Open",
      rating: 4.5,
      imageUrl: "/assets/grocerious.png"
    },

  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
      if(this.categoryId == 1)
      this.displayList = this.restraunts;
      else if(this.categoryId == 2)
      this.displayList = this.groceries;
  }

  seeProducts(id) {
    this.router.navigate(['/products/'+id])
  }

}
