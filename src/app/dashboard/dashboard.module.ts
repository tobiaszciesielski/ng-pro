import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';
import { FormComponent } from './components/form/form.component';
import { RememberMeComponent } from './components/remember-me/remember-me.component';

// Containers
import { AuthPanelComponent } from './containers/auth-panel/auth-panel.component';

// Components
import { DashboardComponent } from './dashboard.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { PushStrategyComponent } from './containers/push-strategy/push-strategy.component';
import { AuthFormComponent } from './containers/auth-form/auth-form.component';
import { OnPushStrategyComponent } from './components/on-push-strategy/on-push-strategy.component';
import { DefaultStrategyComponent } from './components/default-strategy/default-strategy.component';
import { CreditCardNumberDirective } from './directives/credit-card-number.directive';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  declarations: [
    // Containers
    DashboardComponent,
    AuthPanelComponent,
    PushStrategyComponent,

    // Components
    FormComponent,
    RememberMeComponent,
    AuthMessageComponent,
    SimpleFormComponent,
    AuthFormComponent,
    OnPushStrategyComponent,
    PushStrategyComponent,
    DefaultStrategyComponent,
    CreditCardNumberDirective,
    DirectivesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
