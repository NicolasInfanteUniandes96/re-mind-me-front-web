import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AlarmCardComponent } from './components/alarm-card/alarm-card.component';
import { AlarmTableRowComponent } from './components/alarm-table-row/alarm-table-row.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AlarmManagementPageComponent } from './pages/alarm-management/alarm-management-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page.component';

@NgModule({
  declarations: [
    App,
    AlarmCardComponent,
    AlarmTableRowComponent,
    AppLayoutComponent,
    DashboardPageComponent,
    AlarmManagementPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
