import {Pipe, PipeTransform} from '@angular/core';
import {CodeableConcept} from '../shared/medication-model';

@Pipe({
  name: 'getCode'
})
export class CodeAsStringPipe implements PipeTransform {
  transform(code: CodeableConcept): string | null {
    if (!code) {
      return null;
    }
    return code.text as string;
  }
}
