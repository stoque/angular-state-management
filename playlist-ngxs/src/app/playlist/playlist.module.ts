import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { PlaylistComponent } from './containers/playlist/playlist.component';
import { SongsListComponent } from './components/song-list/songs-list.component';
import { PlaylistService } from './services/playlist.service'
import { PlaylistState } from './store/playlist.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      PlaylistState
    ])
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
