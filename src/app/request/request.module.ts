import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestGetComponent } from './request-get/request-get.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestGetComponent,
    RequestResultComponent
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
