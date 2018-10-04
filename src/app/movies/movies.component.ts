import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../movies.service';
import { FormControl } from '@angular/forms';

class Result {
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  vote_average: number;
}

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  
  myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three'];
  options = new Array<Result>();
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopular().subscribe(res => {
     // this.popularList = res.results;
    });
    this._moviesService.getInTheaters().subscribe(res => {
     // this.theatersList = res.results;
    });
    this._moviesService.getTopRatedMovies().subscribe(res => {
     // this.topRatedList = res.results;
    });
  }

  ngOnInit() {
  }

  inputKeyUp(event) {
    console.log("onkeyup");
    if(event.keyCode != 13) {
      if(this.searchStr.length > 1) {
        this.options = new Array<Result>();
        this._moviesService.searchMovies(this.searchStr).subscribe(res => {
          res.results.forEach((item) => {
            this.options.push({'original_title': item.original_title, 'overview': item.overview, 
              'poster_path': item.poster_path, 'release_date': item.release_date, 'vote_average': item.vote_average});
          });
          this.options = this.filter();
        })
      }
    }
    else
    if(event.keyCode==13){
      this._moviesService.searchMovies(this.searchStr).subscribe(res => {
        this.searchRes = res.results;
      })
    }
  }

  

  filter() {
    return this.options.filter(option => option.original_title.toLowerCase().startsWith(this.searchStr));
  }

  optionSelected(selectedItem: string) {
    console.log("selectedItem: ", selectedItem);
    this._moviesService.searchMovies(selectedItem).subscribe(res => {
      this.searchRes = res.results;
    })
  }

  searchMovies() {
    console.log("searhres: ", this.searchRes);
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
