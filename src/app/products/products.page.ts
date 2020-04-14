import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  categoryId;
  items;
  restrauntItems = [
    {
      id:1,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true,
      categoryName: 'Restraunt'
    },
    {
      id:2,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true
    },
    {
      id:3,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true
    },
    {
      id:4,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: false
    },
    {
      id:5,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true
    },
    {
      id:6,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: false
    },
    {
      id:7,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true
    },
    {
      id:8,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: false
    },
    {
      id:9,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true
    },
    {
      id:10,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: false
    },
    {
      id:11,
      categoryId: 1,
      name: 'Happy Bones',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/ic_plateone.png',
      isAvailable: true
    }
  ];

  groceryItems = [
    {
      id:1,
      categoryId: 2,
      name: 'Market Box',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true,
      categoryName: 'Groceries'
    },
    {
      id:2,
      categoryId: 2,
      name: 'Happy Junk',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true
    },
    {
      id:3,
      categoryId: 2,
      name: 'Happy Junk',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: false
    },
    {
      id:4,
      categoryId: 2,
      name: 'Happy Junk',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true
    },
    {
      id:5,
      categoryId: 2,
      name: 'Happy Junk',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true
    },
    {
      id:6,
      categoryId: 2,
      name: 'Local Veg',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: false
    },
    {
      id:7,
      categoryId: 2,
      name: 'Wide Mart',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true
    },
    {
      id:8,
      categoryId: 2,
      name: 'Big Basket',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true
    },
    {
      id:9,
      categoryId: 2,
      name: 'Big Basket',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: false
    },
    {
      id:10,
      categoryId: 2,
      name: 'Big Basket',
      address: '#394, Some st, Bangalore, 560011',
      rating: 4.5,
      distance: 1.5,
      imageUrl: '/assets/grocerious.png',
      isAvailable: true,
      categoryName: 'Groceries'
    },
  ]
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.categoryId== 1)
    this.items = this.restrauntItems;
    else if(this.categoryId == 2)
    this.items = this.groceryItems;
  }

  seeItems(id)
  {
    this.router.navigate(["/items/"+id]);
  }

}
