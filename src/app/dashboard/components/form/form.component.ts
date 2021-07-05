import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { RememberMeComponent } from '../remember-me/remember-me.component';

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
        <p *ngIf="showMessage">You will be logged in <br/> for 30 days<p>
        <ng-content select="[submit-button]"></ng-content>
      </form>
    </div>
  `,
})
export class FormComponent implements AfterContentInit {
  @Output() submitForm = new EventEmitter<any>();

  showMessage: boolean = false;

  @ContentChild(RememberMeComponent) remember! : RememberMeComponent;  

  ngAfterContentInit() {
    if(!!this.remember) {
      this.remember.checked.subscribe((value: boolean) => this.showMessage = value)
    }
  }

  onSubmit(event: any) {
    this.submitForm.emit(event);
  }
}
