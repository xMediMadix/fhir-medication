import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Medication} from '../shared/medication-model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private afs: AngularFirestore) { }

  /**
   * Új medication eltárolása firestoreban
   * @param collectionName: jelenleg csak medications collectionok lesznek
   * @param data: a FHIR szabvány által definiált Medication interface
   * @param id: Firestoreban használt id, hogy később könnyebb legyen azonsítani
   */
  async add(collectionName: string, data: Medication, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
}
