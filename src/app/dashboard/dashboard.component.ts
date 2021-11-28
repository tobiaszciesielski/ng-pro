import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="dashboard">
      <h2 class="dashboard__title">Dashboard Component</h2>
      <dashboard-auth-panel class="dashboard__forms"></dashboard-auth-panel>
      <h2 class="dashboard__title">Simple form component</h2>
      <dashboard-simple-form></dashboard-simple-form>
    </div>
  `,
})
export class DashboardComponent {}
