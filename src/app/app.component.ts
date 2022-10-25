import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  constructor(private router: Router) {};

  apiSelected=0;

  apiUrl='';

  apiList=[
    {
      name:'animechan',
      id:0,
      url:`https://animechan.vercel.app/api/available/anime`
    },
    {
      name:'animenewsnetwork',
      id:1,
      url:'https://www.animenewsnetwork.com/news/'
    },
  ];

  goHome() {
    this.router.navigate(['']);
    this.apiUrl = this.apiList[0].url;
  }

  goSearch() {
    this.router.navigate(['request']);
    this.apiUrl = this.apiList[0].url;
  }

  goAniNews() {
    this.router.navigate(['aniNews']);
    this.apiUrl = this.apiList[1].url;
  }
}
