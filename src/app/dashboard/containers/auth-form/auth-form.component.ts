import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SimpleFormComponent } from '../../components/simple-form/simple-form.component';

@Component({
  selector: 'dashboard-auth-form',
  template: `
    <h2 class="dashboard__title">Simple form component</h2>
    
    <button (click)="handleDeleteComponent()">Destroy component</button>
    <button (click)="handleMoveComponent()">Move component</button>
    <ng-template #simpleForm></ng-template>

    <ng-template #template let-n="name" let-sdwadsdw>
      Name: {{ n }} Something: {{ sdwadsdw }}
    </ng-template>
  `,
})
export class AuthFormComponent {
  @ViewChild('simpleForm', { read: ViewContainerRef })
  simpleForm!: ViewContainerRef;

  @ViewChild('template') templateView!: TemplateRef<any>;

  component!: ComponentRef<SimpleFormComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.simpleForm.createEmbeddedView(this.templateView, {
      name: 'Tobiasz',
      $implicit: 'Ciesielski',
    });

    const authFormFactory =
      this.resolver.resolveComponentFactory(SimpleFormComponent);

    if (this.simpleForm) {
      this.simpleForm.createComponent(authFormFactory);

      this.component = this.simpleForm.createComponent(authFormFactory, 0);
      this.component.instance.title = 'Changed title from dashboard';

      this.component.instance.onSubmit.subscribe((submitedValue) =>
        console.log(submitedValue)
      );

      this.cd.detectChanges();
    }
  }

  handleDeleteComponent() {
    this.component.destroy();
  }

  handleMoveComponent() {
    this.simpleForm.move(this.component.hostView, 1);
  }
}
