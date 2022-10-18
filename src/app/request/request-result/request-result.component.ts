import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request-result',
  templateUrl: './request-result.component.html',
  styleUrls: ['./request-result.component.scss']
})
export class RequestResultComponent implements OnInit {

  @Input() resultList:any;

  teste:any;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() receiveResult(result:any){
    console.log(result);

  }
/*
  selectAnime(result){

  }
*/
}
