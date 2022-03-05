import { Component, OnInit } from '@angular/core';
import { GetAnimeService } from '../servicios/getAnime/get-anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  animes:any;
  constructor(public animeService: GetAnimeService) { }

  ngOnInit(): void {
   this.animeService.getAnimes().subscribe((resp:any)=>{
    this.animes = resp;
    console.log(this.animes);
   });
  }



}
