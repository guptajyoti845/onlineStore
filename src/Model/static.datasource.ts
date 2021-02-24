import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {from, Observable, of} from 'rxjs';

@Injectable()
export class StaticDataSource{
  private products: Product[] = [
    new Product(1, 'Fly room1', 'Category 1', 'Sneakaer rice', 100),
    new Product(2, 'Fly room2', 'Category 2', 'Sneakaer rice1', 200),
    new Product(3, 'Fly room3', 'Category 2', 'Sneakaer rice2', 300),
    new Product(4, 'Fly room4', 'Category 1', 'Sneakaer rice3', 400),
    new Product(5, 'Fly room5', 'Category 1', 'Sneakaer rice4', 500),
    new Product(6, 'Fly room6', 'Category 1', 'Sneakaer rice5', 600),
    new Product(7, 'Fly room7', 'Category 2', 'Sneakaer rice6', 700),
    new Product(8, 'Fly room8', 'Category 1', 'Sneakaer rice7', 800),
    new Product(9, 'Fly room9', 'Category 2', 'Sneakaer rice8', 900),
    new Product(9, 'Fly room9', 'Category 3', 'Sneakaer rice10', 900)
  ];

  getProducts(): Observable<Product[]>{
    return of(this.products);
  }
}

