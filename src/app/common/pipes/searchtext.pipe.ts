import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchtext',
  standalone: true
})
export class SearchtextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
