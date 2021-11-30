import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'dashboard-on-push-strategy',
  template: `
    <h4 style="margin-bottom: 10px;">OnPush strategy</h4>

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushStrategyComponent {
  @Input() user: any;

  ngDoCheck(): void {
    console.log('[OnPush] ngDoCheck');
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[OnPush] ngOnChanges', changes);
    // this.cd
  }

  localUser = { name: 'John' };

  handleChangeLocalObject() {
    console.log('[OnPush] handleChangeLocalObject');

    this.localUser = { name: 'Ann' };
  }
  handleChangeLocalProperty() {
    console.log('[OnPush] handleChangeLocalProperty');

    this.localUser.name = 'Bob';
  }
  handleChangeLocalPropertyViaSetTimeout() {
    console.log('[OnPush] handleChangeLocalPropertyViaSetTimeout');
    setTimeout(() => {
      console.log('[OnPush] handleChangeLocalPropertyViaSetTimeout - changed');
      this.localUser = { name: this.localUser.name + 1 };
      console.log(this.localUser.name);
      // this.cd.markForCheck();
    }, 1000);
  }
}
