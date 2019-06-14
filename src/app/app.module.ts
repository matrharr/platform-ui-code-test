import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProviderCardComponent } from './providerCard/provider-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProviderCardComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
