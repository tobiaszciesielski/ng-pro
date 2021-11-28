import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-auth-panel',
  styleUrls: ['./auth-panel.component.scss'],
  template: `
    <div class="auth-panel">
      <h3>Dashboard Auth Panel Component</h3>

      <dashboard-form (onSubmit)="handleLogin($event)">
        <h3 heading>Login</h3>

        <button class="form__button" submitButton type="submit">Login</button>

        <dashboard-remember-me
          remember-me
          (checked)="handleRememberUser($event)"
        >
        </dashboard-remember-me>
      </dashboard-form>

      <dashboard-form (onSubmit)="handleCreateUser($event)">
        <h3 heading>Create user</h3>
        <button class="form__button" submitButton type="submit">Submit</button>
      </dashboard-form>
    </div>
  `,
})
export class AuthPanelComponent {
  rememberMe: boolean = false;

  handleLogin(event: any) {
    console.log('handleLogin:', event);
  }

  handleCreateUser(event: any) {
    console.log('handleCreateUser:', event);
  }

  handleRememberUser(value: boolean) {
    this.rememberMe = value;
  }
}
