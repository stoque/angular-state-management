import { SongModel } from '../services/playlist.service';

export class LoadSongs {
  static readonly type = '[Playlist] Load Songs';
}

export class ChangeSong {
  static readonly type = '[Playlist] Change Song';
  constructor(public song: SongModel) {}
}
