import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animenews',
  templateUrl: './animenews.component.html',
  styleUrls: ['./animenews.component.scss']
})
export class AnimenewsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getRequest('https://www.animenewsnetwork.com/news/');
    //this.getRequest('https://www.animenewsnetwork.com/news/');
    //this.getRequest('https://www.animenewsnetwork.com/news/');
    this.getRequest('https://www.animenewsnetwork.com/news/2022/10#articles');
  }

  getRequest(url:string){
    this.http.get(url).subscribe(result=>{
      console.log(result);
    })
  }

}
