import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngxs-example';
}
