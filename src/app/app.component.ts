import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Track } from './track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'spotify-app';
 
  public tracks!: Track[];

  ngOnInit(){
    this.getTracksByAuthor();
  }

 

  constructor(private spotifyService: SpotifyService){}
  
  public getTracksByAuthor(): void {
    this.spotifyService.getTracks().subscribe(
      (response: Track[]) => {
        this.tracks=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
