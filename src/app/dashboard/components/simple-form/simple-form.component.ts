import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dashboard-simple-form',
  styleUrls: ['./simple-form.component.scss'],
  template: `
    <div class="form">
      <h3>{{ title }}</h3>
      <form #form="ngForm" (submit)="onSubmit.emit(form.value)">
        <label class="form__label">
          <span class="form__text">Login</span>
          <input
            ngModel
            class="form__input"
            type="text"
            name="login"
            id="login"
          />
        </label>
        <label class="form__label">
          <span class="form__text">Password</span>
          <input
            ngModel
            class="form__input"
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button class="form__button" type="submit">Submit</button>
      </form>
    </div>
  `,
})
export class SimpleFormComponent {
  @Output() onSubmit: EventEmitter<null> = new EventEmitter();
  title = 'Simple form';
}
