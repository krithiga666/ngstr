import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from './shared/tab/tab.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { ApiDeleteComponent } from './api-delete/api-delete.component';
import { APIComponent } from './api-post/api.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    APIComponent,
    ApiDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
