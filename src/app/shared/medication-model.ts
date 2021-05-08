export interface Medication {
  identifier?: Identifier[];
  code?: CodeableConcept;
  /** mat-select formában kerül beolvasásra új gyógyszer létrehozásakor */
  status?: 'active' | 'inactive' | 'entered-in-error';
  manufacturer?: string;
  form?: CodeableConcept;
  /** mat-slider formában kerül beolvasásra új gyógyszer létrehozásakor */
  amount?: Ratio;
  /** dialog ablak lesz létrehozva, ahol lehet hozzáadni gyógyszerhez hatóanyagokat */
  ingredient?: Ingredient[];
  batch?: Batch;
}

export interface Batch {
  lotNumber?: string;
  expirationDate?: Date;
}

export interface Ingredient {
  /** Az anyag neve lesz stringkét eltárolva */
  substance: string;
  isActive?: boolean;
  strength?: Ratio;
}

export interface Identifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary' | 'old';
  type?: CodeableConcept;
  system?: string;
  value?: string;
  period?: Period;
  assigner?: string;
}

export interface CodeableConcept {
  coding?: Coding[];
  text?: string;
}

export interface Coding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

export interface Period {
  start?: Date;
  end?: Date;
}

export interface Ratio {
  numerator?: Quantity;
  denominator?: Quantity;
}

export interface Quantity {
  /** Ez lesz a tabletták száma az adott gyógyszer dobozban */
  value?: number;
  comparator?: '<' | '<=' | '>';
  unit?: string;
  system?: string;
  code?: string;
}
