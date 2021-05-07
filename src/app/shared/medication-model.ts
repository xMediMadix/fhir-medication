export interface Medication {
  identifier?: Identifier[];
  code?: CodeableConcept;
  status?: 'active ' | 'inactive ' | 'entered-in-error';
  manufacturer?: string;
  form?: CodeableConcept;
  amount?: Ratio;
  ingredient?: Ingredient[];
  batch?: Batch;
}

export interface Batch {
  lotNumber?: string;
  expirationDate?: Date;
}

export interface Ingredient {
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
  value?: number;
  comparator?: '<' | '<=' | '>';
  unit?: string;
  system?: string;
  code?: string;
}
