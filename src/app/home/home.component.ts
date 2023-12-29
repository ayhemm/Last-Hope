import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    {
      name: 'Gaming Keyboard 2000',
      description: 'Mechanical gaming keyboard with RGB lighting.',
      price: 99.99,
      imageUrl: '../assets/images/clavier.jpg'
    },
    {
      name: 'Precision Gaming Mouse',
      description: 'High-precision gaming mouse with customizable buttons.',
      price: 49.99,
      imageUrl: '../assets/images/souris.jpg'
    },
    {
      name: 'Unite Gaming ',
      description: 'Unite Gaming is your ultimate destination for immersive and unparalleled gaming experiences. We bring together a passionate community of gamers who share a common love for the exhilarating world of video games.',
      price: 19.99,
      imageUrl: '../assets/images/unite.jpg'
    },
    {
    name: 'Ecran Gaming ',
    description:' ',
    price: 19.99,
    imageUrl: '../assets/images/ecran.jpg'
  },
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
