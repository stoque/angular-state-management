import { Component, Input } from '@angular/core';
import { Character } from '../../store/breaking-bad.state';

@Component({
  selector: 'character-list',
  template: `
    <div>
      <h1>
        <ng-content></ng-content> - ({{ characterList.length }})
      </h1>
      <div *ngFor="let character of characterList" class="character">
        <h2 class="name">
          {{ character.name }}
        </h2>
        <img class="image" src="{{ character.img }}" alt="{{ character.name }}" />
      </div>
    </div>
  `,
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent {
  @Input() characterList: Character[];
}
