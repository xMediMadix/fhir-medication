import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatTable} from '@angular/material/table';
import {MedicationService} from '../../services/medication.service';
import {Medication} from '../../shared/medication-model';

@Component({
  selector: 'app-list-medications',
  templateUrl: './list-medications.component.html',
  styleUrls: ['./list-medications.component.scss']
})
export class ListMedicationsComponent implements OnInit, OnDestroy {
  // @ts-ignore
  subscription: Subscription;
  // @ts-ignore
  medicationsList: Medication[];

  displayedColumns: string[] = [
    'status',
    'manufacturer',
    'amount',
    'actions'
  ];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private medicationService: MedicationService) {
  }

  ngOnInit(): void {
    this.subscription = this.medicationService.getAll('medications').subscribe(
      query => {
        this.medicationsList = query;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteSelectedMedication(id: string): void {
    this.medicationService.delete('medications', id);
  }
}
