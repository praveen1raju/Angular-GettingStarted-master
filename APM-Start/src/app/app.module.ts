import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {HttpClientModule } from '@angular/common/http';
@NgModule({

  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent]

})

export class AppModule { 

}
