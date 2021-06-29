import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="container">
      <h1 class="container__title">
        {{ title }} Application
      </h1>
      <dashboard-root></dashboard-root>
    </div>
  `,
})
export class AppComponent {
  title = 'Ng-Pro';
}
