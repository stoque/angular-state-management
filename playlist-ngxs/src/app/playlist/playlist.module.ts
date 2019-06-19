import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistComponent } from './containers/playlist/playlist.component';
import { SongsListComponent } from './components/song-list/songs-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaylistComponent,
    SongsListComponent
  ],
  exports: [
    PlaylistComponent
  ]
})
export class PlaylistModule { }
