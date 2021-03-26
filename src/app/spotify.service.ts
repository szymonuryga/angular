import { Injectable } from '@angular/core';
import { Track } from './track';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

    public getTracks(artist: string): Observable <Track[]>{
      return this.http.get<Track[]>('${this.apiServerUrl}/album/${artist}');
}

    public addTracks(track: Track): Observable <Track>{
      return this.http.post<Track>('${this.apiServerUrl}/album/add-track',track);
}
}

