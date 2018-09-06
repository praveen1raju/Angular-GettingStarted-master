import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    plpageTitle: string = 'Product List1';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string ='';

    filteredProducts: IProduct[];
    _listFilter: string;
    //private ProdService : ProductService;

get listFilter(): string {
        return this._listFilter;
}
set listFilter(value : string) {
       this._listFilter = value;
       this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}

performFilter(filterBy:string) : IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProduct) => 
  product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

constructor(private _productService: ProductService){  
  //this.listFilter = 'cart';  
}
products: IProduct[] = [];
      toggleImage():void{
          this.showImage = !this.showImage;
      }
      ngOnInit() : void{
          console.log("On Init");
          this._productService.getProducts().subscribe(
              a=> {
                  this.products = a;
                  this.filteredProducts = this.products;
                },
              error => this.errorMessage= <any>error
          );          
      }

      onRatingClicked(msg : string ): void{
        this.plpageTitle = 'Product List: ' + msg;
      }

}