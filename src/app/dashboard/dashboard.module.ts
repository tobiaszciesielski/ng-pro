import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './components/form/form.component';
import { RememberMeComponent } from './components/remember-me/remember-me.component';

// Containers
import { AuthPanelComponent } from './containers/auth-panel/auth-panel.component';

// Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    // Containers
    DashboardComponent,
    AuthPanelComponent,

    // Components
    FormComponent,
    RememberMeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
