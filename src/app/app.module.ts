import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterialsModule} from './materials/materials.module';

import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListMedicationsComponent} from './list-medications/list-medications.component';
import {AddMedicationComponent} from './add-medication/add-medication.component';
import {EditMedicationComponent} from './edit-medication/edit-medication.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListMedicationsComponent,
    AddMedicationComponent,
    EditMedicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule, // Az osszes hasznalt material kigyujtve egy masik modulba
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'list', component: ListMedicationsComponent},
      {path: 'add', component: AddMedicationComponent},
      {path: 'edit', component: EditMedicationComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
