import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';

@Component({
  selector: 'dashboard-root',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="dashboard">
      <h2 class="dashboard__title">Dashboard Component</h2>
      <dashboard-auth-panel class="dashboard__forms"></dashboard-auth-panel>
      <h2 class="dashboard__title">Simple form component</h2>
      <div #simpleForm></div>
    </div>
  `,
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('simpleForm', { read: ViewContainerRef })
  simpleForm!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    const authFormFactory =
      this.resolver.resolveComponentFactory(SimpleFormComponent);

    if (this.simpleForm) {
      const component = this.simpleForm.createComponent(authFormFactory);
      component.instance.title = 'Changed title from dashboard';
      component.instance.onSubmit.subscribe((submitedValue) =>
        console.log(submitedValue)
      );
      this.cd.detectChanges();
    }
  }
}
