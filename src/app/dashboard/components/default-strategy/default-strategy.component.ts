import { Component, DoCheck, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dashboard-default-strategy',
  template: `
    <h4 style="margin-bottom: 10px;">Default strategy</h4>

    <div style="margin-bottom: 10px;">
      <ng-container *ngFor="let item of user | keyvalue">
        <p>
          <b>{{ item.key }}:</b> {{ item.value }}
        </p>
      </ng-container>
    </div>

    <p>Local object:</p>
    {{ localUser | json }}

    <div style="display: flex; flex-direction: column">
      <button (click)="handleChangeLocalProperty()">
        Change local property
      </button>
      <button (click)="handleChangeLocalObject()">Change local object</button>
      <button (click)="handleChangeLocalPropertyViaSetTimeout()">
        Change local property via setTimeout
      </button>
    </div>
  `,
})
export class DefaultStrategyComponent {
  @Input() user: any;

  // ngDoCheck(): void {
  //   console.log('[Default] ngDoCheck');
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Default] ngOnChanges', changes);
  }

  localUser = { name: 'John' };

  handleChangeLocalObject() {
    console.log('[Default] handleChangeLocalObject');

    this.localUser = { name: 'Ann' };
  }
  handleChangeLocalProperty() {
    console.log('[Default] handleChangeLocalProperty');

    this.localUser.name = 'Bob';
  }
  handleChangeLocalPropertyViaSetTimeout() {
    console.log('[Default] handleChangeLocalPropertyViaSetTimeout');
    setTimeout(() => {
      this.localUser.name = 'Tobzo';
      console.log('[Default] handleChangeLocalPropertyViaSetTimeout - changed');
    }, 0);
  }
}
