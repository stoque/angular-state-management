import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SongModel {
  id: number;
  artist: string;
  tack: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class PlaylistService {
  protected _baseUrl = '//localhost:3000/playlist';

  getPlaylist$: Observable<SongModel[]> = this._http.get<SongModel[]>(this._baseUrl);

  constructor(
    private _http: HttpClient
  ) { }

  changeSong(song: SongModel): Observable<SongModel[]> {
    return this._http.put<SongModel[]>(`${this._baseUrl}/${song.id}`, song)
  }
}
