import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { RememberMeComponent } from '../remember-me/remember-me.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'dashboard-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <form class="form" #form="ngForm" (ngSubmit)="onSubmit.emit(form.value)">
      <ng-content select="[heading]"></ng-content>

      <label class="form__label">
        <span class="form__text">Email</span>
        <input
          #email
          ngModel
          name="email"
          class="form__input"
          type="text"
          placeholder="email"
        />
      </label>

      <label class="form__label">
        <span class="form__text">Password</span>
        <input
          #password
          ngModel
          name="password"
          class="form__input"
          type="password"
          placeholder="password"
        />
      </label>

      <ng-content select="[submitButton]"></ng-content>

      <ng-content select="[remember-me]"></ng-content>

      <dashboard-auth-message
        [style.display]="showRememberMessage ? 'inherit' : 'none'"
      ></dashboard-auth-message>
      <!-- <span *ngIf="showRememberMessage">
        You will be remember for 30 days
      </span> -->
    </form>
  `,
})
export class FormComponent implements AfterContentInit, AfterViewInit {
  @ViewChild(AuthMessageComponent) authMessageComponent!: AuthMessageComponent;

  @ViewChild('email') emailInput!: ElementRef<HTMLInputElement>;

  @ViewChild('password') passwordInput!: ElementRef<HTMLInputElement>;

  @ContentChild(RememberMeComponent)
  rememberMeComponent: RememberMeComponent | null = null;

  @Output() onSubmit = new EventEmitter<any>();

  showRememberMessage: boolean = false;

  ngAfterContentInit(): void {
    if (this.authMessageComponent) {
      this.authMessageComponent.days = 30;
    }

    this.rememberMeComponent?.checked.subscribe(
      (checked: boolean) => (this.showRememberMessage = checked)
    );
  }

  ngAfterViewInit(): void {
    this.emailInput.nativeElement.setAttribute(
      'placeholder',
      'ex. name@domain.pl'
    );

    this.emailInput.nativeElement.focus();
  }
}
