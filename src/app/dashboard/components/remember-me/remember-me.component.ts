import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-remember-me',
  template: `
    <label>
      <input (change)="onChange($event)" type="checkbox" name="rememberMe" />
      Remember me
    </label>
  `,
})
export class RememberMeComponent {
  @Output() checked = new EventEmitter<boolean>();

  onChange(event: any) {
    this.checked.emit(event.target.checked);
  }
}
