import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { fakeBackendProvider } from '../app/fakebackend/FakeBackend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { CreateComponent } from './components/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent
  ],
  entryComponents: [
HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MaterialModule,
   ReactiveFormsModule,
   HttpClientModule,
   FormsModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
