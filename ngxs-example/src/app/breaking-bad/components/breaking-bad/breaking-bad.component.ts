import { Component, OnInit } from '@angular/core';

import { BreakingBadService } from '../../services/breaking-bad.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breaking-bad',
  template: `
    <div class="breaking-bad">
      <div *ngFor="let character of characters$ | async">
        <h2>
          {{ character.name }} - {{ character.status }}
        </h2>
        <img class="image" src="{{ character.img }}" alt="{{ character.name }}" />
      </div>
    </div>
  `
})
export class BreakingBadComponent implements OnInit {

  characters$: Observable<any>;

  constructor(
    private _api: BreakingBadService
  ) { }

  ngOnInit() {
    this.characters$ = this._api.getChracters();
  }

}
