import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <div class="form">
    <h4 class="form__title">Dashboard Form component</h4>
    <form  #form="ngForm" novalidate>
      <label class="form__label">
        <span class="form__text"> Login </span>
        <input class="form__input" type="text" />
      </label>
      
      <label class="form__label">
        <span class="form__text"> Password </span>
        <input class="form__input" type="text" />
      </label>

      <button class="form__button">Submit</button>
    </form>
  </div>
  `,
})
export class FormComponent {}
