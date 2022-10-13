import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    
    this.formulario = this.formBuilder.group({
      titulo: [null]
    });
    
  }

  onSubmit(f: any, event:Event) {
    console.log(f.value);
    this.http
    .get('https://animechan.vercel.app/api/quotes/anime?title='+f.value.titulo)
    .subscribe(x=>{
      console.log(x);
      
    });
  }

}
