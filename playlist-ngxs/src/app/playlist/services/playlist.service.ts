import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Song {
  id: number,
  name: string,
  listened: boolean,
  favourite: boolean
}

@Injectable()
export class PlaylistService {
  getPlaylist$: Observable<any> = this._http.get('//localhost:3000/playlist')

  constructor(
    private _http: HttpClient
  ) { }
}
