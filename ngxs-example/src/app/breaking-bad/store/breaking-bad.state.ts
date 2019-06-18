import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { BreakingBadService } from '../services/breaking-bad.service'
import { LoadCharacters } from './breaking-bad.actions';

export interface BreakingBadStateModel {
  characters: Character[]
};

export interface Character {
  id: number,
  name: string,
  birthday: string,
  occupation: any[],
  img: string,
  status: string,
  nickname: string,
  appearance: any[],
  portrayed: string
}

@State<BreakingBadStateModel>({
  name: 'breakingBad',
  defaults: {
    characters: []
  }
})
export class BreakingBadState {
  constructor(
    private _api: BreakingBadService
  ) {}

  @Selector()
  static characters(state: BreakingBadStateModel) {
    return state.characters;
  }

  @Selector()
  static aliveCharacters(state: BreakingBadStateModel) {
    return state.characters.filter((character: Character) => character.status === 'Alive')
  }

  @Selector()
  static deadCharacters(state: BreakingBadStateModel) {
    return state.characters.filter((character: Character) => character.status === 'Deceased')
  }

  @Action(LoadCharacters)
  loadCharacters(ctx: StateContext<BreakingBadStateModel>) {
    return this._api.getCharacters$.pipe(
      tap((characters: Character[]) => {
        ctx.patchState({ characters })
      })
    )
  }
}
