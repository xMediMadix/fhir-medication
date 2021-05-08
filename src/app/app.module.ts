import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MaterialsModule} from './materials/materials.module';

import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ListMedicationsComponent} from './pages/list-medications/list-medications.component';
import {AddMedicationComponent} from './pages/add-medication/add-medication.component';
import {EditMedicationComponent} from './pages/edit-medication/edit-medication.component';
import {AddIngredientsDialogComponent} from './pages/add-medication/add-ingredients-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListMedicationsComponent,
    AddMedicationComponent,
    EditMedicationComponent,
    AddIngredientsDialogComponent
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
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
