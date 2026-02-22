import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  standalone: true
})
export class SqrtPipe implements PipeTransform {

  transform(value: number): number {
    if (value == null || value < 0) {
      return 0;
    }
    return Math.sqrt(value);
  }

}