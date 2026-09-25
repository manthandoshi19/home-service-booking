import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrFormat',
  standalone: true
})
export class InrFormatPipe implements PipeTransform {
  transform(value: number | undefined | null): string {
    if (value === undefined || value === null || isNaN(value)) {
      return '₹0';
    }
    // Format number to Indian Rupee standard format (e.g. ₹1,499)
    return '₹' + value.toLocaleString('en-IN');
  }
}
