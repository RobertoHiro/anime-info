import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestGetComponent } from './request-get/request-get.component';
import { RequestResultComponent } from './request-result/request-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  } from '@progress/kendo-angular-dropdowns';
import { FilterPipe } from './request-get/filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    RequestGetComponent,
    RequestResultComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AutocompleteLibModule,
  ],
  exports:[
    RequestGetComponent,
    RequestResultComponent,
  ]
})
export class RequestModule { }
