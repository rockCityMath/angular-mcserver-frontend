import { ClarityModule } from '@clr/angular'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConsoleService } from '../app/services/console.service';
import { ApiService } from '../app/services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ConsolePageComponent } from './components/console-page/console-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConsolePageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConsoleService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
