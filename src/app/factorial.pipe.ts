import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial',
  standalone: true
})
export class FactorialPipe implements PipeTransform {

  transform(value: number): number {
    if (value == null || value < 0) {
      return 0;
    }

    let result = 1;
    for (let i = 1; i <= value; i++) {
      result *= i;
    }

    return result;
  }

}