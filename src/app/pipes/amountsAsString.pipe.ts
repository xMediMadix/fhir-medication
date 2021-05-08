import {Pipe, PipeTransform} from '@angular/core';
import {Ratio} from '../shared/medication-model';

@Pipe({
  name: 'getAmount'
})
export class AmountsAsStringPipe implements PipeTransform {
  transform(amount: Ratio): string | null {
    if (!amount) {
      return null;
    }
    return amount.numerator?.value + ' pieces/package';
  }
}
