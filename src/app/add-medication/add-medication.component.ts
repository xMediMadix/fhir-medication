import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddIngredientsDialogComponent} from './add-ingredients-dialog.component';
import {Ingredient} from '../shared/medication-model';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationComponent implements OnInit {
  // Default értékek teszteléshez
  ingredients: Ingredient[] = [
    {substance: 'ibuprofen'},
  ];

  // Status adattagnak lehetséges értékei FHIR szerint
  possibleStatuses = ['active', 'inactive', 'entered-in-error'];

  // Ingredients táblázat fejléce
  displayedColumns: string[] = [
    'substance',
    'buttons'
  ];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog) {
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
