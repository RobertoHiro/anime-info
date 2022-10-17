import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public dropDownItems = new Array;

  resultList:any;

  animeList:any;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.http.
    get(`https://animechan.vercel.app/api/available/anime`).
    subscribe(x=>{
      this.animeList = x;
      this.dropDownItems = new Array;
      for (let i = 0; i < this.animeList.length; i++) {
        const element = this.animeList[i];
        this.dropDownItems[i] = {
          text: element,
          value: i
        };
      }
      console.log(this.animeList);
    });
  }

  updateResiltList(x:any){
    this.resultList=x;
  }
}
