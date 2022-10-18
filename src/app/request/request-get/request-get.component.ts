import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.scss']
})
export class RequestGetComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  @Input() animeList:any;
  //searchText = '';

  /*
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = new Observable();
  */

  keyword = 'name';

  selectEvent(item: any) {
    console.log(item);
    this.request(item.name);

    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    console.log(e);

    // do something when input is focused
  }



  @Output() resultLoaded = new EventEmitter<any>();

  constructor(private http:HttpClient) { 

    }

  ngOnInit(): void {
    this.formulario = new FormBuilder().group({
      titulo: [null]
    });
    /*
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    */
  }

  /*
  onSubmit(f: any) {
    console.log(f.value);
    this.request(f.value.titulo);
  }

  selectedAnime(animeName:string){
    this.request(animeName);
    this.searchText = '';
  }
  */

  request(title:string){
    this.http.
    get(`https://animechan.vercel.app/api/quotes/anime?title=`+title).
    subscribe(x=>{
      console.log(x);
      this.resultLoaded.emit(x);
    });
  }

  /*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  */

}
