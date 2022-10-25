import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-fact',
  templateUrl: './anime-fact.component.html',
  styleUrls: ['./anime-fact.component.scss']
})
export class AnimeFactComponent implements OnInit {

  constructor(private http:HttpClient,) { }

  animeList: any[] = [];
  rawAnimeList:any;
  animeFactList:any[]=[];
  keyword = 'name';

  ngOnInit(): void { 
    this.getAvaliableAnimeList('https://anime-facts-rest-api.herokuapp.com/api/v1');    
  }

  getAvaliableAnimeList(url:string){
    this.http.get(url).subscribe(result => {
      //console.log(result);
      this.rawAnimeList = result;
      this.animeList = this.animeListConstructor(this.rawAnimeList['data']);
      console.log(this.animeList);
    })
  }

  animeListConstructor(resultData:[]){
    var animeListToReturn = [];
    for (let i = 0; i < resultData.length; i++) {
      const element = resultData[i];
      animeListToReturn.push({
        name:element['anime_name'],
        id:i
      });
    }
    return animeListToReturn;
  }
  
  selectEvent(item:any) {
    console.log(item);
    this.getAnimeFacts(item.name);
  }

  getAnimeFacts(animeName:string){
    this.http.get('https://anime-facts-rest-api.herokuapp.com/api/v1/'+animeName).subscribe(result => {
      var resultAny:any = result;
      console.log(resultAny);
      this.animeFactList = [];
      for (let i = 0; i < resultAny['data'].length; i++) {
        const element = resultAny['data'][i];
        this.animeFactList.push(element);
      }
    });
  }
}
