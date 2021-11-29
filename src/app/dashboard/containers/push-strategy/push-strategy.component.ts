import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'dashboard-push-strategy',
  template: `
    <h3 style="text-align: center;">Push strategy</h3>
    <button (click)="handleChangeField()">Change field</button>
    <button (click)="handleAddField()">Add field</button>
    <button (click)="handleChangeObject()">Change object</button>
    <button (click)="handleChangeFieldViaSetTimeout()">
      Change field via setTimeout
    </button>
    <div style="display: flex; gap: 30px;">
      <dashboard-on-push-strategy [user]="user"></dashboard-on-push-strategy>
      <dashboard-default-strategy [user]="user"></dashboard-default-strategy>
    </div>
  `,
})
export class PushStrategyComponent {
  user: any = {
    login: 'Tobzo',
    password: 'tobzo123',
    email: 'tobzo@123.pl',
    admin: false,
  };

  // ngDoCheck(): void {
  //   console.log('[Root] ngDoCheck');
  // }

  handleChangeField() {
    console.log('[Root] handleChangeField');

    this.user.login = 'Bobzo';
  }

  handleAddField() {
    console.log('[Root] handleAddField');

    this.user.age = 24;
  }

  handleChangeObject() {
    console.log('[Root] handleChangeObject');

    this.user = {
      login: 'Tobini',
      password: 'proste',
      email: 'jebac@pis.pl',
      admin: true,
    };
  }

  handleChangeFieldViaSetTimeout() {
    setTimeout(() => {
      this.user.admin = true;
    }, 1000);
  }
}
