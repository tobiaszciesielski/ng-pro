import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-auth-message',
  template: `<p>You will be logged in {{ days }} days</p>`,
})
export class AuthMessageComponent {
  days: number = 7;
}
