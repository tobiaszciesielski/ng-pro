import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-auth-panel',
  styleUrls: ['./auth-panel.component.scss'],
  template: `
    <div class="auth-panel">
      <h3 class="title">Dashboard Auth Panel Component</h3>
      <dashboard-form></dashboard-form>
      <dashboard-form></dashboard-form>
    </div>
  `,
})
export class AuthPanelComponent {}
