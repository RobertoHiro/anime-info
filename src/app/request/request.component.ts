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

  apiSelected=0;

  apiList=[
    {
      name:'animechan',
      id:0,
      urlAnimeList:`https://animechan.vercel.app/api/available/anime`
    },
    {
      name:'animenewsnetwork',
      id:1,
      urlAnimeList:'https://www.animenewsnetwork.com/encyclopedia/reports.php?id=155&nlist=all'
    },
  ];

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.getAnimeAvaliableList(this.apiList[this.apiSelected].urlAnimeList);
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
