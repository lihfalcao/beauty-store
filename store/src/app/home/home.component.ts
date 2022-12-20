import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.getProducts();
  }



  getProducts(){
    this.productService.products().subscribe(products =>{ this.products = products})
  }

}
