import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public dropDownItems = new Array;

  resultList:any;

  animeList:any;

  @Input() apiSelected=0;

  @Input() apiList=[];

  constructor(private http: HttpClient) {
   }

  sub:any;

  ngOnInit(): void {
    this.getAnimeAvaliableList('https://animechan.vercel.app/api/available/anime');
  }

  keyword = 'name';

  selectEvent(item: any) {
    console.log(item);
    this.request(item.name);

    // do something with selected item
  }

  request(title:string){
    this.http.
    get(`https://animechan.vercel.app/api/quotes/anime?title=`+title).
    subscribe(x=>{
      console.log(x);
      this.resultList = x;
    });
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    console.log(e);

    // do something when input is focused
  }

  getAnimeAvaliableList(url:string){
    this.http.
    get<[]>(url).
    subscribe(x=>{
      console.log(x);
      this.dropDownItems = new Array;
      for (let i = 0; i < x.length; i++) {
        const element = x[i];
        switch (this.apiSelected) {
          case 0:
            this.dropDownItems[i] = {
              name: element,
              id: i
            };
            break;
        
          default:
            break;
        }
      }
      this.animeList = this.dropDownItems;
      console.log(this.animeList);
    });
  }

  updateResiltList(x:any){
    this.resultList=x;
  }
}
