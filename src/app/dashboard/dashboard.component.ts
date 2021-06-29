import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="dashboard">
      <h2 class="dashboard__title">Dashboard Component</h2>
      <dashboard-auth-panel></dashboard-auth-panel>
    </div>
  `,
})
export class DashboardComponent {}
