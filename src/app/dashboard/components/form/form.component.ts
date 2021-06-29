import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <div class="form">
      <ng-content select="[form-title]"></ng-content>

      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm" novalidate>
        <label class="form__label">
          <span class="form__text"> Login </span>
          <input ngModel name="login" class="form__input" type="text" />
        </label>

        <label class="form__label">
          <span class="form__text"> Password </span>
          <input ngModel name="password" class="form__input" type="text" />
        </label>

        <ng-content select="dashboard-remember-me"> </ng-content>
        
        <ng-content select="[submit-button]"></ng-content>
      </form>
    </div>
  `,
})
export class FormComponent {
  @Output() submitForm = new EventEmitter<any>();

  onSubmit(event: any) {
    this.submitForm.emit(event);
  }
}
