import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';
import { RememberMeComponent } from '../remember-me/remember-me.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'dashboard-form',
  styleUrls: ['./form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush, // to odapala detekcje zmian
  // tylko na zmianach w inputach
  template: `
    <div class="form">
      <ng-content select="[form-title]"></ng-content>

      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm" novalidate>
        <label class="form__label">
          <span class="form__text"> Login </span>
          <input ngModel name="login" class="form__input" type="text" #login/>
        </label>

        <label class="form__label">
          <span class="form__text"> Password </span>
          <input ngModel name="password" class="form__input" type="text" #password/>
        </label>

        <ng-content select="dashboard-remember-me"> </ng-content>
        <!-- <p *ngIf="showMessage">You will be logged in <br/> for 30 days<p> -->

        <dashboard-auth-message
          [style.display]="showMessage ? 'inherit' : 'none'"
        ></dashboard-auth-message>

        <ng-content select="[submit-button]"></ng-content>
      </form>
    </div>
  `,
})
export class FormComponent implements AfterContentInit, AfterViewInit {
  @Output() submitForm = new EventEmitter<any>();
  
  @ContentChild(RememberMeComponent) remember!: RememberMeComponent;
  
  @ViewChild(AuthMessageComponent) message!: AuthMessageComponent;
  @ViewChild('login') login!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  showMessage: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.login.nativeElement.setAttribute('placeholder', 'Enter your login')
    this.password.nativeElement.setAttribute('placeholder', 'Enter your password')
    
    this.message.days = 30;
    this.cd.detectChanges()
  }
  
  ngAfterContentInit() {
    if (!!this.message) {
      this.message.days = 30;
    }

    if (!!this.remember) {
      this.remember.checked.subscribe(
        (value: boolean) => (this.showMessage = value)
      );
    }
  }

  onSubmit(event: any) {
    this.submitForm.emit(event);
  }
}
