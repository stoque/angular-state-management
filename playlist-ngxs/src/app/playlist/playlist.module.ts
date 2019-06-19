import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlaylistComponent } from './containers/playlist/playlist.component';
import { SongsListComponent } from './components/song-list/songs-list.component';
import { PlaylistService } from './services/playlist.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PlaylistComponent,
    SongsListComponent
  ],
  providers: [
    PlaylistService
  ],
  exports: [
    PlaylistComponent
  ]
})
export class PlaylistModule { }
