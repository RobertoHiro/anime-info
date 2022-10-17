import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestGetComponent } from './request-get/request-get.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  } from '@progress/kendo-angular-dropdowns';
import { FilterPipe } from './request-get/filter.pipe';


@NgModule({
  declarations: [
    RequestGetComponent,
    RequestResultComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    RequestGetComponent,
    RequestResultComponent
  ]
})
export class RequestModule { }
