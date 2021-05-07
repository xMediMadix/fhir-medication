import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicationComponent } from './medication/medication.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialsModule} from './materials/materials.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule // Az osszes hasznalt material kigyujtve egy masik modulba
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
