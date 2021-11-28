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
import { AuthFormComponent } from './containers/auth-form/auth-form.component';

@NgModule({
  declarations: [
    // Containers
    DashboardComponent,
    AuthPanelComponent,

    // Components
    FormComponent,
    RememberMeComponent,
    AuthMessageComponent,
    SimpleFormComponent,
    AuthFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
