import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

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
      [list]="playlist$ | async"
      (toggle)="onToggle($event)">
      Favourites
    </songs-list>

    <songs-list
      [list]="playlist$ | async"
      (toggle)="onToggle($event)">
      Listened
    </songs-list>
  </div>
  `,
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist$ = this._api.getPlaylist$;

  constructor(
    private _api: PlaylistService
  ) { }

  ngOnInit() {
    // this._api.getPlaylist$.subscribe(values => console.log(values))
  }

}
