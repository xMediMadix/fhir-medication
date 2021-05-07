import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-ingredients-dialog',
  templateUrl: 'add-ingredients-dialog.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddIngredientsDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddIngredientsDialogComponent>, @Inject(MAT_DIALOG_DATA) public substanceName: string) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
