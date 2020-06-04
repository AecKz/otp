import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { DigitOnlyModule } from '@uiowa/digit-only';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CountdownModule,
    DigitOnlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
