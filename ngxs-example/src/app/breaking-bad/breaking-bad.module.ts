import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { BreakingBadService } from './services/breaking-bad.service';
import { BreakingBadComponent } from './components/breaking-bad/breaking-bad.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

import { BreakingBadState } from './store/breaking-bad.state';

@NgModule({
  declarations: [
    BreakingBadComponent,
    CharacterListComponent
  ],
  exports: [
    BreakingBadComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([
      BreakingBadState
    ])
  ],
  providers: [
    BreakingBadService
  ]
})
export class BreakingBadModule { }
