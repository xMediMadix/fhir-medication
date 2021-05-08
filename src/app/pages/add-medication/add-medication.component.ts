import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddIngredientsDialogComponent} from './add-ingredients-dialog.component';
import {Ingredient, Medication, Ratio} from '../../shared/medication-model';
import {MatTable} from '@angular/material/table';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationComponent implements OnInit {

  get manufacturer(): FormControl {
    return this.form.get('manufacturer') as FormControl;
  }

  get status(): FormControl {
    return this.form.get('status') as FormControl;
  }

  constructor(public dialog: MatDialog) {
  }

  form = new FormGroup({
    status: new FormControl('', Validators.required),
    manufacturer: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    amount: new FormControl('', Validators.required)
  });

  // Felhasználó által megadott anyagok
  ingredients: Ingredient[] = [];

  // Status adattagnak lehetséges értékei FHIR szerint
  possibleStatuses = ['active', 'inactive', 'entered-in-error'];

  // Ingredients táblázat fejléce
  displayedColumns: string[] = [
    'substance',
    'buttons'
  ];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;

  submitMedication(): void {
    // FHIR-ben: Amount of drug in package, tehát jelen esetben ez egy egész szám lesz,
    // így követve a szabványt a hányados számlálója a megadott szám, míg a nevező konstans 1
    const amountRatio: Ratio = {
      numerator: {value: this.form.get('amount')?.value},
      denominator: {value: 1}
    };
    // Így már előállt minden egyéb adattag is, hogy létrehozásra kerülhessen:
    const medication: Medication = {
      status: this.form.get('status')?.value,
      manufacturer: this.form.get('manufacturer')?.value,
      amount: amountRatio,
      ingredient: this.ingredients
    };
    console.log(medication);
    // TODO: service létrehozása, firebase kapcsolat és firestore adattárolás megvalósítása
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    // ingredientsek hozzáadására tervezett komponens
    this.dialog.open(AddIngredientsDialogComponent)
      .afterClosed()
      .subscribe(substanceInput => {
        if (substanceInput !== undefined && substanceInput !== null) { // Ha undefined vagy null érkezik, akkor nem kell hozzáadni
          const newIngredient = {
            substance: substanceInput
          };
          this.ingredients.push(newIngredient);
          this.table.renderRows();
        }
      });
  }

  delete(ingredient: Ingredient): void {
    const idx = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(idx, 1);
    this.table.renderRows();
  }

}
