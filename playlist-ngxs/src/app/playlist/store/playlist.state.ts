import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { PlaylistService } from '../services/playlist.service'
import { SongModel } from '../services/playlist.service'
import { LoadSongs, ChangeSong } from './playlist.actions';

export interface PlaylistModel {
  user: string;
  songs: SongModel[];
};

@State<PlaylistModel>({
  name: 'playlist',
  defaults: {
    user: 'stoque',
    songs: []
  }
})
export class PlaylistState {
  constructor(
    private _api: PlaylistService
  ) {}

  @Selector()
  static songs(state: PlaylistModel) {
    return state.songs;
  }

  @Selector()
  static listenedSongs(state: PlaylistModel) {
    return state.songs.filter((song: SongModel) => song.listened);
  }

  @Selector()
  static favouriteSongs(state: PlaylistModel) {
    return state.songs.filter((song: SongModel) => song.favourite);
  }

  @Action(LoadSongs)
  loadSongs({ patchState }: StateContext<PlaylistModel>) {
    return this._api.getPlaylist$.pipe(
      tap((songs: SongModel[]) => patchState({ songs }))
    );
  }

  @Action(ChangeSong)
  changeSong({ patchState, getState }: StateContext<PlaylistModel>, action: ChangeSong) {
    const state = getState();
    const updatedSong = action.song;
    return this._api.changeSong(updatedSong).pipe(
      tap(() => {
        patchState({
          songs: [
            ...state.songs.map((song) => song.id === updatedSong.id ? updatedSong : song)
          ]
        })
      })
    );
  }
}
