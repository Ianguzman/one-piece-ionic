import { Component, inject, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.module';
import { Season } from 'src/app/models/season.model';
import { LanguageService } from 'src/app/services/language.service';
import { OnePieceService } from 'src/app/services/one-piece.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  episode_number = '';
  seasons : Season[] = [];
  episodes : Episode [] = [];
  selectedSeason = '';
  languageSvc = inject(LanguageService);
  onePieceSvc = inject(OnePieceService);
  selectedLanguage = '';

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('language') as string;
    this.getSeasons();
  }



  setLanguage(){
    this.languageSvc.setLanguage(this.selectedLanguage)
    this.getSeasons();
  }


  getSeasons(){
    this.onePieceSvc.getSeasons().subscribe({
      next: (res: any) => {
        console.log(res);
        this.seasons = res.seasons;
        this.selectedSeason = this.seasons[0].id;

        this.getEpisodesBySeason();
      }
    })
  }
  getEpisodesBySeason(){
    this.onePieceSvc.getEpisodesBySeason(this.selectedSeason).subscribe({
      next: (res: any) => {
        console.log(res);
        this.episodes = res.episodes
      }
    })
  }
  getEpisodesByNumber(){
    if (this.episode_number){
      this.onePieceSvc.getEpisodeByNumber(this.episode_number).subscribe({
        next: (res: any) => {
          console.log(res);
          this.episodes = [res.episode]
        },
        error:(err:any) =>{
          this.episodes = [];
        }
      })
    }else this.getEpisodesBySeason();
    
  }
}
