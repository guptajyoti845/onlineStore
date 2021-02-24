import {NgModule} from '@angular/core';
import {StoreComponent} from './store.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../../Model/Model.module';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    StoreComponent
  ]
})

export class StoreModule {
}
