import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  http = inject(HttpClient);


  //Obtener Temporadas
  getSeasons(){
    return this.http.get(environment.baseUrl + environment.seasons
    )
      
    }

  getEpisodesBySeason(id:string){
    return this.http.get(environment.baseUrl + environment.episodes_by_season + id
    )
        
    }

  getEpisodeByNumber(number: String){
    return this.http.get(environment.baseUrl + environment.episode + number
    )
          
    }
  }



