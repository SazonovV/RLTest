import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsWindowComponent } from './buttons-window/buttons-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InMemoryDataService} from './services/in-memory-data.service';
import { HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
