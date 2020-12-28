import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  getdata:any;
  Title:any;
  p:number = 1;
  constructor(private movieservice:MovieService) { }

  ngOnInit(): void {

    this.movieservice.showItems().subscribe(data=>{

      this.getdata=data;
    })
  }

  Search(){
     if(this.Title == ""){
       this.ngOnInit();
     }
     else{
       this.getdata = this.getdata.filter (res => {
         return res.Title.toLocaleLowerCase().match(this.Title.toLocaleLowerCase());
       })
     }

  }

  
}
