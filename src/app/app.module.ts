import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { RequestModule } from './request/request.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { SearchAnimesComponent } from './search-animes/search-animes.component';
import { FilterPipe } from './search-animes/filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RouterModule, Routes } from '@angular/router';
import { AnimenewsComponent } from './animenews/animenews.component';
import { AnimeFactComponent } from './anime-fact/anime-fact.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const routes: Routes = [
  { path: '', redirectTo: '/request', pathMatch: 'full' },
  { path: 'request', component: RequestComponent },
  { path: 'aninews', component: AnimenewsComponent },
  { path: 'anifact', component: AnimeFactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    SearchAnimesComponent,
    FilterPipe,
    AnimenewsComponent,
    AnimeFactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RequestModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownsModule,
    GridModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AutocompleteLibModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
