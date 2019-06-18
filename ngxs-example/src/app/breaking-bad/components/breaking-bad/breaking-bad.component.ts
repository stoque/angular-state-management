import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LoadCharacters } from '../../store/breaking-bad.actions';
import { BreakingBadState } from '../../store/breaking-bad.state';

@Component({
  selector: 'app-breaking-bad',
  template: `
    <div class="breaking-bad">
      <character-list [characterList]="characters$ | async">
        All
      </character-list>

      <character-list [characterList]="aliveCharacters$ | async">
        Alive
      </character-list>

      <character-list [characterList]="deadCharacters$ | async">
        Dead
      </character-list>
    </div>
  `,
  styleUrls: ['./breaking-bad.component.sass']
})
export class BreakingBadComponent implements OnInit {
  @Select(BreakingBadState.characters) characters$: Observable<any>;
  @Select(BreakingBadState.aliveCharacters) aliveCharacters$: Observable<any>;
  @Select(BreakingBadState.deadCharacters) deadCharacters$: Observable<any>;

  constructor(
    private _store: Store
  ) { }

  ngOnInit() {
    this._store.dispatch(new LoadCharacters());
  }
}
