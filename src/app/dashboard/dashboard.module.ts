import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './components/form/form.component';

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
  ],
  imports: [BrowserModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
