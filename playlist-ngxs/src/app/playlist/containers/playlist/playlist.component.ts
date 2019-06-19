import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SongModel } from '../../services/playlist.service';
import { PlaylistState } from '../../store/playlist.state';
import { LoadSongs, ChangeSong } from '../../store/playlist.actions';

@Component({
  selector: 'app-playlist',
  template: `
  <div class="songs">
    <songs-list
      [list]="playlist$ | async"
      (toggle)="onToggle($event)">
      Playlist
    </songs-list>

    <songs-list
      [list]="listenedSongs$ | async"
      (toggle)="onToggle($event)">
      Listened
    </songs-list>

    <songs-list
      [list]="favouriteSongs$ | async"
      (toggle)="onToggle($event)">
      Favourites
    </songs-list>
  </div>
  `,
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Select(PlaylistState.songs) playlist$: Observable<SongModel[]>;
  @Select(PlaylistState.favouriteSongs) favouriteSongs$: Observable<SongModel[]>;
  @Select(PlaylistState.listenedSongs) listenedSongs$: Observable<SongModel[]>;

  constructor(
    private _store: Store
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadSongs());
  }

  onToggle(song: SongModel) {
    this._store.dispatch(new ChangeSong(song))
  }
}
