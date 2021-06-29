import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-auth-panel',
  styleUrls: ['./auth-panel.component.scss'],
  template: `
    <div class="auth-panel">
      <h3>Dashboard Auth Panel Component</h3>

      <dashboard-form (submitForm)="handleSubmit($event)">
        <h4 form-title class="form__title">Login Form</h4>
        <button submit-button type="submit" class="form__button">
          Sign in
        </button>
        <dashboard-remember-me
          (checked)="handleChecked($event)"
        ></dashboard-remember-me>
      </dashboard-form>

      <dashboard-form (submitForm)="handleLogin($event)">
        <h4 form-title class="form__title">Register Form</h4>
        <button submit-button type="submit" class="form__button">
          Sign up
        </button>
      </dashboard-form>
    </div>
  `,
})
export class AuthPanelComponent {
  rememberMe: boolean = false;

  handleSubmit(event: any) {
    console.log('submitted:', event.password, event.login, this.rememberMe);
  }

  handleLogin(event: any) {
    console.log('logged:', event.password, event.login, this.rememberMe);
  }

  handleChecked(value: boolean) {
    this.rememberMe = value;
  }
}
