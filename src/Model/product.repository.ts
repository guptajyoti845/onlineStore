import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {StaticDataSource} from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getProducts(category: string): Product[] {
    return this.products.filter(p => (category == null) || p.category === category);
  }

  getProduct(id: number): Product {
    return <Product> this.products.find(p => p.id == id);
  }

  getCategories(category: string): (string | undefined)[]{
    return this.categories;
  }



}
