import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-directives',
  template: `
    <h3>Directives</h3>
    <label>
      Enter your card number
      <input credit-card-number [ngStyle]="{ display: 'block' }" type="text" />
    </label>
  `,
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
