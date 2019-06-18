import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BreakingBadModule } from './breaking-bad/breaking-bad.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BreakingBadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
