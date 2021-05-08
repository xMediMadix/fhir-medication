import { Injectable } from '@angular/core';
import {Medication} from '../shared/medication-model';
import {AngularFirestore, AngularFirestoreDocument, CollectionReference, Query} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private afs: AngularFirestore) { }

  /**
   * Új medication eltárolása firestoreban
   * @param collectionName: jelenleg csak medications collection van
   * @param data: a FHIR szabvány által definiált Medication interface
   * @param id: Firestoreban használt id, hogy később könnyebb legyen azonsítani
   */
  async add(collectionName: string, data: Medication, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  /**
   * Az összes paraméterben kapott collection lekérdezése
   * @param collectionName: jelenleg csak medications collection van
   */
  getAll(collectionName: string): Observable<any[]> {
    return this.afs.collection(collectionName, ref  => {
      const query: CollectionReference | Query = ref;
      return query;
    }).valueChanges() as Observable<any[]>;
  }

  /**
   * Egy medication elkérése id alapján firestoreból
   * @param collectionName: jelenleg csak medications collection van
   * @param id: az elérni kívánt medication id-je
   */
  getById(collectionName: string, id: string): AngularFirestoreDocument<Medication> {
    return this.afs.collection(collectionName).doc(id);
  }

  /**
   * Táblázatból kiválasztott medication törlése a firestoreból
   * @param collectionName: jelenleg csak medications collection van
   * @param id: a törölni kívánt medication id-je
   */
  async delete(collectionName: string, id: string): Promise<string> {
    await this.afs.collection(collectionName).doc(id).delete();
    return id;
  }

  /**
   * Táblázatból kiválasztott medication módosítása
   * @param collectionName: jelenleg csak medications collection van
   * @param id: a módosítani kívánt medication id-je
   * @param data: egy medication objektum a módosított mezőkkel
   */
  async update(collectionName: string, id: string, data: Medication): Promise<string> {
    await this.afs.collection(collectionName).doc(id).update(data);
    return id;
  }
}
