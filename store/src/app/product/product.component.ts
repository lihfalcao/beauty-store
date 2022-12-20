import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../home/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: any;
  product: any;

  constructor(private productService: ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.getProduct();
  }

  getProduct(){
    this.productService.showProduct(this.id).subscribe(product =>{this.product = product})
  }

}
