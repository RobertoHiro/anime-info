import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-animes',
  templateUrl: './search-animes.component.html',
  styleUrls: ['./search-animes.component.scss']
})
export class SearchAnimesComponent implements OnInit {
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]
  @Input() animeList:any;
  constructor() { }

  ngOnInit(): void {
  }

}
