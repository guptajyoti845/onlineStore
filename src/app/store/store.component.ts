import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductRepository} from '../../Model/product.repository';
import {Product} from '../../Model/product.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public selectedCategory: string | undefined;
  public productsPerPage = 4;
  public selectedPage = 1;
  @ViewChild('category') category: any;
  constructor(private productRepository: ProductRepository) { }


  ngOnInit(): void {
  }

  //

  get products(): Product[]{
    let pageIndex = (this.selectedPage -1) * this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex+this.productsPerPage);
  }
  get categories(): (string | undefined)[]{
    return this.productRepository.getCategories();
  }

  changeCategory(newCategory? : string){
    this.selectedCategory = newCategory;
  }


  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(event?: any){
    this.productsPerPage = Number(event.target.value);
    this.changeCategory();
  }


  get pageNumbers(): number[]{
    return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage))
      .fill(0).map((x,i) => (i+1));
  }
}
