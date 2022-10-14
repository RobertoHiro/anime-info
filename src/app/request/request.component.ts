import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  resultList:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  updateResiltList(x:any){
    this.resultList=x;
  }

}
