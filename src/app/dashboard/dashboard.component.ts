import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  template: `
    <div class="dashboard">
      <h2 class="dashboard__title">Dashboard Component</h2>
      <dashboard-auth-panel class="dashboard__panel"></dashboard-auth-panel>
      <dashboard-auth-form class="dashboard__panel"></dashboard-auth-form>
    </div>
  `,
})
export class DashboardComponent {}
