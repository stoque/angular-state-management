import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BreakingBadService } from './services/breaking-bad.service';
import { BreakingBadComponent } from './components/breaking-bad/breaking-bad.component';

@NgModule({
  declarations: [
    BreakingBadComponent
  ],
  exports: [
    BreakingBadComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BreakingBadService
  ]
})
export class BreakingBadModule { }
