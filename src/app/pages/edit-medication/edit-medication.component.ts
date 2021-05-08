import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicationService} from '../../services/medication.service';
import {Ingredient, Medication} from '../../shared/medication-model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-edit-medication',
  templateUrl: './edit-medication.component.html',
  styleUrls: ['./edit-medication.component.scss']
})
export class EditMedicationComponent implements OnInit {
  // Status adattagnak lehetséges értékei FHIR szerint
  possibleStatuses = ['active', 'inactive', 'entered-in-error'];
  // @ts-ignore
  medication;
  // @ts-ignore
  ingredients;

  displayedColumns: string[] = ['Ingredient'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicationService: MedicationService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    if (id) {
      this.medicationService.getById('medications', id).ref.get().then((doc) => {
        if (doc.exists) {
          this.medication = doc.data() as Medication;
          this.ingredients = new MatTableDataSource<any>(this.medication.ingredient.map((x: Ingredient) => x.substance));
        }
      });
    }
  }

  update(): void {
    if (this.medication.id) {
      this.medicationService.update('medications', this.medication.id, {status: this.medication.status});
      this.router.navigate(['list']);
    }

  }

}
