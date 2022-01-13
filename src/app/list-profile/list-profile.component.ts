import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss']
})
export class ListProfileComponent implements OnInit {
  public productProfiles = [
    {
      prodName: 'Camera',
      shotDescription: 'Price like never before',
      linkTitle: 'Buy Now',
      prodImageLink: "./../../assets/images/camera.jpg"
    },
    {
      prodName: 'Belts',
      shotDescription: 'Price like never before',
      linkTitle: 'Shop Now',
      prodImageLink: "./../../assets/images/belts.jpg"
    },
    {
      prodName: 'Duffel Bags',
      shotDescription: 'Price like never before',
      linkTitle: 'Grab Now',
      prodImageLink: "./../../assets/images/bags.jpg"
    },
    {
      prodName: 'Belts',
      shotDescription: 'Price like never before',
      linkTitle: 'Shop Now',
      prodImageLink: "./../../assets/images/belts.jpg"
    },
    {
      prodName: 'Camera',
      shotDescription: 'Price like never before',
      linkTitle: 'Buy Now',
      prodImageLink: "./../../assets/images/camera.jpg"
    },
    {
      prodName: 'Duffel Bags',
      shotDescription: 'Price like never before',
      linkTitle: 'Grab Now',
      prodImageLink: "./../../assets/images/bags.jpg"
    },
    {
      prodName: 'Camera',
      shotDescription: 'Price like never before',
      linkTitle: 'Buy Now',
      prodImageLink: "./../../assets/images/camera.jpg"
    },
    {
      prodName: 'Belts',
      shotDescription: 'Price like never before',
      linkTitle: 'Shop Now',
      prodImageLink: "./../../assets/images/belts.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
