import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteDate'
})
export class QuoteDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
