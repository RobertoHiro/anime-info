import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.scss']
})
export class RequestGetComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  @Input() animeList:any;
  searchText = '';

  @Output() resultLoaded = new EventEmitter<any>();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.formulario = new FormBuilder().group({
      titulo: [null]
    });
  }


  onSubmit(f: any) {
    console.log(f.value);
    this.http.
    get(`https://animechan.vercel.app/api/quotes/anime?title=`+f.value.titulo).
    subscribe(x=>{
      console.log(x);
      this.resultLoaded.emit(x);
    });
  }

}
